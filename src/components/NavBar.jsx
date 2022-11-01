import React from 'react'
import NavBars from "../components/NavBar.css"
import { Link } from 'react-router-dom';


const NavBar = () => {

  return (
    <nav>
        <div class="logo"><h1>Instagram</h1></div>
        <div class="icons">
             <Link to="/"><i class="fa-solid fa-house"></i></Link>
            <i class="fa-solid fa-magnifying-glass"></i>
            <i class="fa-solid fa-paper-plane"></i>
        </div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/signin">Sign In</Link></li>
            <li><Link to="/registr">Register</Link></li>
        </ul>
    </nav>
  )
}

export default NavBar
