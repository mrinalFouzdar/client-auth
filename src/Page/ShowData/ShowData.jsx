import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { deletePost } from '../../Redux/PostSlice/post-Slice'
import "./showData.css"
const ShowData = () => {
  const {get,post,loading} = useSelector(state => state.app)
  const dispatch = useDispatch()
  const nevigate = useNavigate()
    console.log(get)
    const handleDelete=(id)=>{
        dispatch(deletePost(id))
    }
    if(loading){
        return(
            <>
            <h1>IsLoading</h1>
            </>
        )
    }
  return (
    <div>
        <div>
            <button onClick={()=>nevigate("/from")}>Got to the Form</button>
        </div>
        <table>
            <thead>
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Id
                    </th>
                    <th>
                        Actions(Delete)
                    </th>
                    <th>
                        Actions(Edit)
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    get.length>0 && get.map((items)=>
                    <tr key={items._id}>
                        <td>{items.name}</td>
                        <td>{items._id}</td>
                        <td>
                            <button onClick={()=> handleDelete(items._id)}>Delete</button>
                        </td>
                        <td>
                            <button>
                                <Link to={`/editbyId/${items._id}`}>
                                 Edite
                                 </Link>
                                 </button>
                        </td>
                    </tr>
                    )
                }
                
            </tbody>
        </table>

    </div>
  )
}

export default ShowData