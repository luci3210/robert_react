import React from 'react';
import { Link } from 'react-router-dom';  

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid px-5">
            <a className="navbar-brand" href="#">Navbar</a>
            
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link to="/home" className="nav-link active" aria-current="page">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link">About</Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="nav-link">Login</Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link">Register</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar