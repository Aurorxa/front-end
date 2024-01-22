import {createSlice, nanoid} from "@reduxjs/toolkit"


const postSlice = createSlice({
  name: "post",
  initialState: [
    {
      id: 1,
      title: "Tony",
      body: "CEO",
      userId: 1,
    },
    {
      id: 2,
      title: "Zoey Lang",
      body: "Technical Lead",
      userId: 2,
    },
    {
      id: 3,
      title: "Jane Fisher",
      body: "Senior Developer",
      userId: 3,
    },
    {
      id: 4,
      title: "William Howard",
      body: "Community Manager",
      userId: 4,
    },
  ],
  reducers: {
    addPost: {
      prepare: (title, body, userId) => {
        return {
          payload: {
            id: nanoid(),
            title,
            body,
            userId
          }
        }
      },
      reducer: (state, action) => {
        state.push(action.payload)
      }
    }
  },
})

export const {
  addPost
} = postSlice.actions

export const selectAllPost = state => state.post

export default postSlice.reducer