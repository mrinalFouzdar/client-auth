import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { createPost, getPost, updatePost } from '../../Redux/PostSlice/post-Slice'

const From = () => {
const dispatch = useDispatch()
const nevigate = useNavigate()
const {get}= useSelector(state=> state.app)
const {id} =useParams()
const [data,setData]=useState({
    name:""
})
// const {edit} = useSelector(state=> state.app)
// if(edit){
//     setData()
// }
const handleFindData=(id)=>{
  if(id){
    let findData = get.find((item)=> item._id === id)
    console.log(findData.name)
    setData({name:findData.name})
    console.log(data);
  }
}
useEffect(()=>{
  if(id){
    handleFindData(id)
  }
},[id])



const handleChange=(e)=>{
    let { name, value } = e.target;
   setData( {...data,[name]:value})
}

const handleSubmit=(e)=>{
    e.preventDefault();
    if(id){
      console.log(id);
      console.log(data)
      dispatch(updatePost({id,data}))
    }else{
      dispatch(createPost(data))
    }
    setData({name:""})
    nevigate("/")
}
const {name} =data
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={name ?name :""} onChange={handleChange} placeholder='Enter name'/>
            <br />
            <button > {id ? "Update" :"Submit"}</button>
        </form>
    </div>
  )
}

export default From