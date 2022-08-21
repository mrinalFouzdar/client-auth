
import './App.css';
import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import { getallPost } from './Redux/PostSlice/post-Slice';
import From from './Components/From/From';
import ShowData from './Page/ShowData/ShowData';
import { Route, Routes } from "react-router-dom";



function App() {
  const dispatch = useDispatch()
  const {get,post} = useSelector(state => state.app)
  useEffect(()=>{
    dispatch(getallPost())
  },[post])
  // console.log(get);
  return (
    <div className="App">      
      <Routes>
        <Route path='/' element={<ShowData/>}/>
        <Route path="/from" element={<From />} />
        <Route path="/editbyId/:id" element={<From />} />
        
      </Routes>
    </div>
  );
}

export default App;
