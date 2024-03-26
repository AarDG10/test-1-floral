import React from 'react'
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
                    <h4><box-icon name='rupee'></box-icon>{props.new_price}</h4>
                </div>
                <a href='#'>Add to Cart</a>
      </div>
  )
}
export default Item;