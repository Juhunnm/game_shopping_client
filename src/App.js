import React, { useEffect, useState } from 'react'
import axios from 'axios';
const App = () => {
    const [data,setData]=useState("");

    useEffect(()=>{
        axios.get("http://localhost:8080/api/data")
        .then((res)=>{
            setData(res.data);
        })
        .catch((err)=>{
            console.log("ERR data : ",err);
        })
    },[])
  return (
    <div>
        <h1>Respoense from spring boot : </h1>
      {data}
    </div>
  )
}

export default App
