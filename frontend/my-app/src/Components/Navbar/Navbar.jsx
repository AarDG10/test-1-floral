import React from 'react'
import './Navbar.css'
import logo from '../Assets/Floralfusion-logo-removebg-preview (1).png'
import cart_icon from '../Assets/cart_icon.png'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className='Navbar'>
        <a href="#" class="logo"><img src={logo} alt="Floral Fusion"/></a>
            <ul className='nav-menu'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/shop'>Shop</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <a href="#" id="close"><i class='bx bx-x'></i></a>
            </ul>
            <div className="nav-login-cart">
                <img src={cart_icon} alt="Cart"></img>
                <div className="nav-cart-count">0</div>
            </div>
    </div>
  )
}
