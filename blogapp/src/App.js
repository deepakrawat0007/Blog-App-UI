import React from 'react';
import Login from './components/login/login';
import './App.css';
import {BrowserRouter , Routes , Route} from "react-router-dom";
import Registration from './components/registration/registration';
import PostView from './components/postview/postview';
import CreatePost from './components/postview/CreatePost';


function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/registration' element={<Registration/>} />
    <Route path='/posts' element={<PostView/>} />
    <Route path="/create" element={<CreatePost/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
