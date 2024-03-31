import React, { useContext } from 'react'
import './CartItem.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
    const {all_product, cartItems, removeFromCart} = useContext(ShopContext);
    let totalCost = 0;
    all_product.forEach(product => {
        if (cartItems[product.id] > 0) {
            totalCost += product.new_price * cartItems[product.id];
        }
    });
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
        <div className="calor"></div>
        {all_product.map((e)=>{
            if(cartItems[e.id]>0)
            {
                return (<div>
                <div className="cartitems-format cart-items-format-main">
                <img src={e.image} alt='' className="carticon-product-icon"/>
                <p>{e.name}</p>
                <p>₹{e.new_price}</p>
                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                <p>₹{e.new_price*cartItems[e.id]}</p>
                <img className='cartitems-remove-icon' src={remove_icon}  onClick={()=>{removeFromCart(e.id)}} alt=" "/>
                </div>
                <div className="calor"></div>
                </div>)
            }
            return null;
        })}
        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Cart Total</h1>
                <div className='main-content'>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>₹{totalCost}</p>
                        </div>
                        <div className="calor"></div>
                        <div className="cartitems-total-item">
                            <p>Shipping Free</p>
                            <p>Free</p>
                        </div>
                        <div className="calor"></div>
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>₹{totalCost}</h3>
                        </div>
                    </div>
                    <button className='checkout'>Proceed To Checkout</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItems;