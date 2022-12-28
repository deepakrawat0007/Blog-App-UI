import React ,{useState} from "react";
import Header from "../header/header_main";
import axios from "axios"
import { useNavigate } from "react-router-dom";
const API = "https://blog-app-api-hile.onrender.com"


const Registration = ()=>{
    const navigate = useNavigate()
    const [err , setErr] = useState()
    const [data , setData] = useState({
        email:"",
        password:"",
        password2:""
    })
    const handleChange = (e)=>{
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setData(newData)

    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(data.password !== data.password2){
setErr("Password Not match with above Password")
        }else{
        
      axios.post(API+"/register" ,{
        email:data.email,
        password:data.password
      }).then((res)=>{
        setErr("")
        alert("User Created SuccessFully")
        console.log(res)
        navigate('/')
      }).catch((e)=>{
        alert("User Already Exists with given EMail")
        console.log(e.message)
      })
    }
        
    }
    return(
        <>
        <Header/>
        <div className="heading-sign-in">SIGN-UP</div>
        <div className="form-wrapper">

        <form onSubmit={(e)=>{handleSubmit(e)}}>
            {err?(<div>{err}</div>):''}
            <input type="email" id="email" value={data.email} onChange={(e)=>{handleChange(e)}} placeholder="Email"/>
            <input type="password" id="password" value={data.password} onChange={(e)=>{handleChange(e)}} placeholder="Password"/>
            <input type="password" id="password2" value={data.password2} onChange={(e)=>{handleChange(e)}} placeholder="Password"/>
            <button type="submit">Sign-UP</button>  
        </form>
        </div>
        </>
    )
}

export default Registration