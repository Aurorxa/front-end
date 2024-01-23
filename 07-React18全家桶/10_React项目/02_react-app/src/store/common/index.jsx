import {asyncThunkCreator, buildCreateSlice} from "@reduxjs/toolkit"

const createSliceWithThunks = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

const commonSlice = createSliceWithThunks({
  name: "common",
  initialState: {
    billList: [],
    loading: false,
  },
  reducers: (create) => ({
    addBill: create.reducer((state,action)=>{
      state.billList.push(action.payload)
    }),
    fetchBillList: create.asyncThunk(async () => {
      const res = await fetch("/api/ka")
      return await res.json()
    },{
      pending: (state) => {
        state.loading = true
      },
      rejected: (state, action) => {
        state.loading = false
      },
      fulfilled: (state, action) => {
        state.loading = false
        state.billList.push(...action.payload)
      },
    })
  }),
})

export const {addBill,fetchBillList} = commonSlice.actions

export default commonSlice.reducer