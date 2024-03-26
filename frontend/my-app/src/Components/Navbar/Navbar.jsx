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
                <li><Link to='/medicinal'>Medicinal</Link></li>
                <li><Link to='/aesthetic'>Aesthetic</Link></li>
                <li><Link to='/herb'>Herbs</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/login'>Login</Link></li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/cart'><img src={cart_icon} alt="Cart"></img></Link>
                <div className="nav-cart-count">0</div>
            </div>
    </div>
  )
}
