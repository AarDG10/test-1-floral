import React from 'react'
import './Item.css'
import 'boxicons'

const Item = (props) => {
  return (
    <div class="pro"> {/* Card */ }
                <img src={props.image}/>
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