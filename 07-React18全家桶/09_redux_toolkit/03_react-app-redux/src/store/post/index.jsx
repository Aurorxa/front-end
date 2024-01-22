import {createAsyncThunk, createSlice, current} from "@reduxjs/toolkit"

export const fetchPosts = () => createAsyncThunk("posts/fetchPosts", async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    return await response.json()
  } catch (error) {
    return error.message
  }
})

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
  },
  reducers: {
    addPost: (state, action) => {
      console.log('@@@', action.payload, current(state))
      state.posts.push(action.payload)
    }
  },
  extraReducers: (builder) => {
    // builder
    //   .addCase(fetchPosts.pending, (state, action) => {
    //     state.status = 'loading'
    //   })
    
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.status = 'succeeded'
      // state.entities.push(action.payload)
      console.log(action)
      // state.posts = state.posts.concat(action.payload)
    })
    
    // builder.addCase(fetchPosts.rejected, (state, action) => {
    //   state.status = 'failed'
    //   state.error = action.error.message
    // })
  }
})

export const {
  addPost
} = postSlice.actions

export const selectAllPost = state => state.post.posts
export const getPostsStatus = state => state.post.status
export const getPostsError = state => state.post.error

export default postSlice.reducer