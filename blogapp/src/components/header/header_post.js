import React from 'react';
import "./header.css"
import {  useNavigate } from 'react-router-dom';


const Header = ()=>{
    const navigate = useNavigate()
    const handleRoute = ()=>{
        navigate("/create")
    }
    const handleRoute2 = ()=>{
        localStorage.removeItem('token')
        navigate('/')
    }
    return (
        <>
        <div className='header-wrapper'>
            <h2>Blog APP</h2>
            <button onClick={handleRoute}>Create</button>
            <button onClick={handleRoute2}>LogOut</button>
        </div>
        </>
    )
}

export default Header