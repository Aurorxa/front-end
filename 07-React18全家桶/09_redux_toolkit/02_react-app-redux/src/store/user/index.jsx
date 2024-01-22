import {createSlice} from "@reduxjs/toolkit";


const userSlice = createSlice({
  name: 'user',
  initialState: [
    {id: 1, name: 'John Doe'},
    {id: 2, name: 'Ervin Howell'},
    {id: 4, name: '许大仙'},
  ],
  reducers: {}
})

export const selectAllUsers = (state) => state.user

export const {} = userSlice.actions

export default userSlice.reducer