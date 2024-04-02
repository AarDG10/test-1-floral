import React from 'react'
import './Navbar.css'
import navprof from '../../assets/Admin-Panel-Assets/nav-profile.svg'
import floralogo from '../../assets/Floralfusion-logo.jpeg'

const Navbar = () => {
  return (
    <div className="navbar">
        <img src={floralogo} alt="FloralFusion" className="nav-logo" />
        <img src={navprof} alt="Profile" className="profile" />
    </div>
  )
}

export default Navbar;