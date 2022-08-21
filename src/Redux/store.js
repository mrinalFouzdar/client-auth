import { configureStore } from '@reduxjs/toolkit'
import postReducer from './PostSlice/post-Slice'



export const store = configureStore({
    reducer: {
      app: postReducer,
    },
  })