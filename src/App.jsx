import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Navbar from './layouts/navbar';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/login';
import Register from './pages/Register';

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'//  

function App() {


  return (
    <>
    <Router>
    <Navbar></Navbar>  
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes> 
    </Router>
    </>
    
  )
}

export default App
