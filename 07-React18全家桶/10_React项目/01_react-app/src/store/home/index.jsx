import {asyncThunkCreator, buildCreateSlice} from "@reduxjs/toolkit";

export const createSliceWithThunks = buildCreateSlice({
  creators: {asyncThunk: asyncThunkCreator},
});

const homeSlice = createSliceWithThunks({
  name: "home",
  initialState: {},
  reducers: {}
})

export const {} = homeSlice.actions

export default homeSlice.reducer