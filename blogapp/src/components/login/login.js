import React ,{useState} from "react";
import Header from "../header/header_main";
import "./login.css"
import axios from "axios"
import { useNavigate } from "react-router-dom";
const API = "https://blog-app-api-hile.onrender.com"


const Login = ()=>{
    const navigate = useNavigate()
    const [data , setData] = useState({
        email:"",
        password:""
    })
    const handleChange = (e)=>{
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setData(newData)

    }
    const handleSubmit = (e)=>{
        e.preventDefault()
      axios.post(API+"/login" ,{
        email:data.email,
        password:data.password
      }).then((res)=>{
        console.log(res)
        localStorage.setItem('token',res.data.token)
        navigate('/posts')
      }).catch((e)=>{
        console.log(e.message)
      })

        
    }
    return(
        <>
        <Header/>
        <div className="heading-sign-in">SIGN-IN</div>
        <div className="form-wrapper">

        <form onSubmit={(e)=>{handleSubmit(e)}}>
            <input type="email" id="email" value={data.email} onChange={(e)=>{handleChange(e)}} placeholder="Email"/>
            <input type="password" id="password" value={data.password} onChange={(e)=>{handleChange(e)}} placeholder="Password"/>
            <button type="submit">Sign-In</button>  
        </form>
        </div>
        </>
    )
}

export default Login