import React, { useContext , useState, useEffect} from 'react'
import './Item.css'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import 'boxicons'

const Item = (props) => {
  return (
    <div class="pro"> {/* Card */ }
                <Link to={`/product/${props.id}`}>
                <img src={props.image}/></Link>
                <div class="des">
                    <h5>{props.name}</h5>
                    <div class="star">
                    <box-icon name='star'></box-icon>
                    <box-icon name='star'></box-icon>
                    <box-icon name='star'></box-icon>
                    <box-icon name='star'></box-icon>
                    <box-icon name='star'></box-icon>
                    </div>
                    <h4>₹{props.new_price}</h4>
                </div>
                <Link to='https://mywebar.com/p/Project_0_tf5hd65dih'><box-icon name='camera'></box-icon></Link>
                <Link to={`/product/${props.id}`}>View Product</Link>
      </div>
  )
}
export default Item;