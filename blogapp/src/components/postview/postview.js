import React, { useEffect  , useState} from "react";
import Header from "../header/header_post";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./postview.css"
const URL = "https://blog-app-api-hile.onrender.com"


const PostView = ()=>{
    const navigate = useNavigate()
   const [data , setData] = useState([])
    useEffect(()=>{
        if(!localStorage.getItem('token')){
            navigate("/")
        }

    },[])
    useEffect(()=>{
axios.get(URL+"/posts" ,{
    headers:{
        'authorization':localStorage.getItem('token')
    }
}).then((res)=>{
    setData(res.data)
    console.log(res.data)
}).catch((e)=>{
    console.log(e.message)
})
    },[])
    return (
        <>
        <Header/>
        {data.map((items,idx)=>(
            <div className="box">
                <div className="image"><img width="350px"  src={items.image}/></div>
            <div className="title">Title:-{items.title}</div>
            <div className="desc">DESCRIPTION:-{items.description}</div>
            <div className="author">AUTHOR:-{items.author}</div>
            
            </div>
        ))}
        </>
    )

}

export default PostView