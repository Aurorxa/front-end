import {createAsyncThunk, createSlice, nanoid} from "@reduxjs/toolkit"
import axios from "axios";

import {produce} from "immer"


const BASE_URL = "https://jsonplaceholder.typicode.com/posts"

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get(BASE_URL)
  console.log(response.data)
  return response?.data
})

export const deletePost = createAsyncThunk("post/deletePost", async (initialPost) => {
  const {id} = initialPost
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    if (response?.status === 200) return initialPost;
    return `${response.status} : ${response.statusText}`;
  } catch (error) {
    return error.message
  }
})

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: ""
  },
  reducers: {
    addPost: (state, action) => {
      state.posts =
        [...state.posts, {...action.payload,id: nanoid()}]
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = "loading"
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        return produce(state, draftState => {
          draftState.status = "succeeded";
          draftState.posts = Array.from(new Set([...draftState.posts, ...action.payload]));
        });
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message
      })
      .addCase(deletePost.fulfilled, (state, action) => {
          if (!action?.payload.id) {
            console.log("could not delete");
            console.log(action.payload)
            return
          }
          const {id} = action.payload;
          state.posts = state.posts.filter(post =>
            post.id !== id)
        }
      )
    
  }
})


export const selectAllPosts = (state) => state.post.posts
export const getPostsError = (state) => state.post.error
export const getPostsStatus = (state) => state.post.status

export const {addPost} = postSlice.actions

export default postSlice.reducer