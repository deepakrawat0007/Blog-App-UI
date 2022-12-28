import React from "react";
import Header from "../header/header_post";
import { useNavigate } from "react-router-dom";
import { useState , useEffect } from "react";
const URL = "https://blog-app-api-hile.onrender.com"

const CreatePost = ()=>{

    useEffect(()=>{
        if(!localStorage.getItem('token')){
            navigate("/")
        }
    },[])
    const navigate = useNavigate()
    const handleSubmit = async(e)=>{
        e.preventDefault()
        const data = e.target
        const formData = new FormData(data)
        console.log(formData)
        try{
            await fetch(`${URL}/posts` , {method :"POST" ,
             body:formData ,
            headers:{"authorization":localStorage.getItem('token')}})
            .then((res)=>{
                return res.json()
            }).then((data)=>{
                alert("Post Created SuccessFully")
                console.log(data)
                navigate('/posts')
            }).catch((e)=>{
                console.log(e.message)
            })

        }catch(e){
            console.log(e.message)
            alert(e.message)
        }
 }
    return (
        <>
        <Header/>
        <div>
            <form onSubmit={(e)=>{handleSubmit(e)}}>
                <input type={"file"} placeholder="No File Choosen" name="file"/>
                <input type={"text"} placeholder="Title" name="title"/>
                <input type={"text"} placeholder="Description" name="description"/>
                <input type={"text"} placeholder="Author" name="author"/>
                <button type="submit">Post Blog</button>

            </form>
        </div>
        </>
    )
}


export default CreatePost