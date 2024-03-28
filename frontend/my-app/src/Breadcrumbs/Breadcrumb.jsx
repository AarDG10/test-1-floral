import React from 'react'
import './Breadcrumb.css'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
export const Breadcrumb = (props) => {
  const {product} = props;
    return (
    <div className="breadcrumb">
        <Link to='/' style={{ textDecoration: 'none', color:'#000080'}}>Home</Link> &#62; <Link to='/shop' style={{ textDecoration: 'none', color:'#000080'}}>Shop</Link> &#62; 
        <Link to={`/${product.category}`} style={{ textDecoration: 'none', color:'#000080'}}>{product.category}</Link> &#62; {product.name}
    </div>
  )
}

export default Breadcrumb;
