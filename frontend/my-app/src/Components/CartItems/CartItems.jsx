import React, { useContext } from 'react'
import './CartItem.css'
import { ShopContext } from '../../Context/ShopContext'
// import removei

export const CartItems = () => {
    const {all_product, CartItems, removeFromCart} = useContext(ShopContext);
  return (
    <div className="cartitems">
        <div className="cart-items-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr/>
        <div>
            <div className="cartitems-format">
                <img src="" alt=" " className="carticon-product-icon"/>
                <p></p>
                <p></p>
                <button className='cartitems-quantity'></button>
                <p></p>
                <img src='' alt=''/>
            </div>
        </div>
    </div>
  )
}

export default CartItems;