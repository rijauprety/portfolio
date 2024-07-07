import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className="nav">
            <div className='navContainer'>
                <span className='headItem'>Rija Uprety</span>
                <span className='headItem-1'>UI/UX Designer.</span>
            </div>
            <ul>
                <li>
                    <Link to="/" style={{ textDecoration: "none", color: "#964B00" }}>Home</Link>
                </li>
                <li>
                    <Link to="/about" style={{ textDecoration: "none", color: "#964B00" }}>About</Link>
                </li>
                <li>Services</li>
                <li>Blog</li>
                <li>
                    <Link to="/contact" style={{ textDecoration: "none", color: "#964B00" }}>Contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
