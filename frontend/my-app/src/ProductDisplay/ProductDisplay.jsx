import React, { useContext , useState, useEffect} from 'react'
import './ProductDisplay.css'
import star_icon from "../Components/Assets/Plant-Items/star_icon.png"
import star_dullicon from "../Components/Assets/Plant-Items/star_dull_icon.png"

const ProductDisplay = (props) => {
    const {product} = props;
    const [stringArray, setStringArray] = useState([]);
    useEffect(() => {
        // Fetch or import data from JSON
        setStringArray(product.inst); // Assuming "strings" is the key in your JSON
      }, []);
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
                {stringArray.map((str, index) => (
          <li key={index}>{str}</li>
        ))}
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">
                    ${product.old_price}
                </div>
                <div className="productdisplay-right-price-new">
                    ${product.new_price}
                </div>
            </div>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt=""/>
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dullicon} alt="" />
                <p>
                    (122)
                </p>
            </div>
            <button>ADD TO CART</button>
            
        </div>
        </div>
    </div>
  )
}

export default ProductDisplay;