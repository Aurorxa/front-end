import {asyncThunkCreator, buildCreateSlice} from "@reduxjs/toolkit"

const createSliceWithThunks = buildCreateSlice({
  creators: {asyncThunk: asyncThunkCreator},
});

const commonSlice = createSliceWithThunks({
  name: "common",
  initialState: {
    billList: [],
    loading: false,
    error: null,
  },
  reducers: (create) => ({
    addBill: create.reducer((state, action) => {
      state.billList.push(action.payload)
    }),
    fetchBillList: create.asyncThunk(async (_,{rejectWithValue}) => {
      try {
        const res = await fetch("/api/ka1")
        return await res.json()
      }catch (error) {
        throw rejectWithValue({error: error.message})
      }
    }, {
      pending: (state) => {
        state.loading = true
      },
      rejected: (state, action) => {
        state.loading = false
        state.error =  action.payload ?? action.error
      },
      fulfilled: (state, action) => {
        state.loading = false
        state.billList.push(...action.payload)
      },
      settled: (state, action) => {
        state.loading = false
      },
    })
  }),
})

export const {addBill, fetchBillList} = commonSlice.actions

export default commonSlice.reducer