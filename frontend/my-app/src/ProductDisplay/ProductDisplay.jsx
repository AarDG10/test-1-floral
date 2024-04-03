import React, { useContext , useState, useEffect} from 'react'
import './ProductDisplay.css'
import { ShopContext } from '../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
    // const [stringArray, setStringArray] = useState([]);
    // useEffect(() => {
    //     // Fetch or import data from JSON
    //     setStringArray(product.inst); // Assuming "strings" is the key in your JSON
    //   }, []);
  return (
    <div className="productdisplay">
        <div className="calr"></div>
        <div className="main">
        <div className="productdisplay-left">
            <div className="productdisplay-img">
                <img src={product.image} alt="" className="productdisplay-mainimg" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-description">
                {product.desc}
            </div>
            <div className="instructions">
                <h3>Care Instructions: </h3>
                {/* {stringArray.map((str, index) => (
          <li key={index}>{str}</li> */}
        {/* ))} */}
            <h4>{product.inst}</h4>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">
                    Old Price: <s>₹{product.old_price}</s>
                </div><br/>
                <div className="productdisplay-right-price-new">
                    New Price: ₹{product.new_price}
                </div>
            </div>
            <div className="addstars">
            <div className="button1">
                <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ProductDisplay;