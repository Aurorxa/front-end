import {createSlice} from "@reduxjs/toolkit";


const userSlice = createSlice({
  name: 'users',
  initialState: [
    {id: 1, name: 'John Doe'},
    {id: 2, name: 'Ervin Howell'},
    {id: 4, name: '许大仙'},
  ]
})

export const selectAllUsers = (state) => state.user

export default userSlice.reducer