import React from 'react'
import './Adverts.css'
import bgimg from '../Assets/Vert-home.png'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

const Adverts = () => {
  return (
    <section className='hero'>  {/*Semantic*/}
        <h4>Trade-in-offer</h4>
        <h2>Super Value Deals</h2>
        <h1>On all Products</h1>
        <p>Save More with Coupons & up to 70% off!</p>
        <Link to='/shop'><button>Shop Now</button></Link>
    </section>
  )
}

export default Adverts;