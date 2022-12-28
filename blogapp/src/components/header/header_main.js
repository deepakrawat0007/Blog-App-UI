import React from 'react';
import "./header.css"
import {  useNavigate } from 'react-router-dom';


const Header = ()=>{
    const navigate = useNavigate()
    const handleRoute = ()=>{
        navigate("/registration")
    }
    const handleRoute2 = ()=>{
        navigate('/')
    }
    return (
        <>
        <div className='header-wrapper'>
            <h2>Blog APP</h2>
            <button onClick={handleRoute2}>Sign-In</button>
            <button onClick={handleRoute}>Sign-Up</button>
        </div>
        </>
    )
}

export default Header