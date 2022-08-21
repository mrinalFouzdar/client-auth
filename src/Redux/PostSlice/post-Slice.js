
import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"


export const getPost =createAsyncThunk("post/getPost",async(id)=>{
  try {
    let res = await axios.get(`http://139.59.86.250:1337/categories/${id}`)
    console.log(res.data);
    return [res.data]
    
  } catch (error) {
    console.log(error);
  }
  
})
export const getallPost =createAsyncThunk("post/getPost",async()=>{
  try {
    
    let res =await axios.get(`http://139.59.86.250:1337/categories`)
    console.log(res.data)
    return res.data
  } catch (error) {
    console.log(error)
  }
  
})
export const deletePost =createAsyncThunk("post/deletePost",async(id)=>{
 let res = await axios.delete(`http://139.59.86.250:1337/categories/${id}`)
//  console.log(res)
console.log(id)
 return res.data
  
})
export const createPost =createAsyncThunk("post/createPost",async(data)=>{
 let res = await axios.post(`http://139.59.86.250:1337/categories/`,data)
//  console.log(data)
 return res.data
  
})
  export const updatePost =createAsyncThunk("post/updatePost",async({id,data})=>{
    // console.log(id);
    try {
      let res = await axios.put(`http://139.59.86.250:1337/categories/${id}`,data)
       console.log(res)
      return res.data
      
    } catch (error) {
      console.log(error)
    }
    
  })



const postSlice = createSlice({
  name:"post",
  initialState: {
    post:[],
    get:[],
    loading:false,
    error:null,
    edit:false
  },

  extraReducers:{
    [getPost.pending] :(state,action)=>{
      state.loading=true;
    },
    [getPost.fulfilled]:(state, action)=>{
      state.loading =false;
      state.post=action.payload;
    },
    [getPost.rejected]:(state, action)=>{
      state.loading =false;
      state.error= action.payload;
    },
    
    [getallPost.pending] :(state,action)=>{
      state.loading=true;
    },
    [getallPost.fulfilled]:(state, action)=>{
      state.loading =false;
      state.get= [...action.payload];
    },
    [getallPost.rejected]:(state, action)=>{
      state.loading =false;
      state.error= action.payload;
    },
    [deletePost.pending] :(state,action)=>{
      state.loading=true;
    },
    [deletePost.fulfilled]:(state, action)=>{
      state.loading =false;
      state.post= [action.payload];
    },
    [deletePost.rejected]:(state, action)=>{
      state.loading =false;
      state.error= action.payload;
    },
    [createPost.pending] :(state,action)=>{
      state.loading=true;
    },
    [createPost.fulfilled]:(state, action)=>{
      state.loading =false;
      // console.log(action.payload)
      state.post= [action.payload];
    },
    [createPost.rejected]:(state, action)=>{
      state.loading =false;
      state.error= action.payload;
    },
    [updatePost.pending] :(state,action)=>{
      state.loading=true;
      // state.edit=true
    },
    [updatePost.fulfilled]:(state, action)=>{
      state.loading =false;
      // console.log(action.payload)
      state.post= [action.payload];
    },
    [updatePost.rejected]:(state, action)=>{
      state.loading =false;
      state.error= action.payload;
    },
    

  }
})

export default postSlice.reducer;