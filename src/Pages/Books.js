import React, { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react'
import BooksSection from '../components/BooksSection';

const Books = () => {
     const[Data,setData]=useState();
    useEffect(()=>{
      const fetch=async()=>{
        await axios.get("http://localhost:1000/api/v1/getbooks").then((res)=>setData(res.data.books))
      }
      fetch();
    
    },)
  return (
    <div className='okay1' style={{minHeight:"80.6vh",background:"#8B8000"}}>
        <div className=' d-flex justify-content-center align-items-center py-3'>
        <h3 className="text-white">Best Sellers!</h3></div>
        {Data ?(<BooksSection data={Data}/>):(<div className='text-white' >Loading..</div>)}
        </div>
  )
}

export default Books