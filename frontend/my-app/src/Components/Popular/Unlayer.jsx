import React, { createContext, useContext , useState, useEffect} from 'react'
import './Popular.css'
// import data_product from '../Assets/all_product'
import Item from '../Item/Item'


export const Unlayer = () => {
  const [all_product,setAll_Product] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:4000/allproducts')
    .then((response)=>response.json())
    .then((data)=>setAll_Product(data))
  },[])
  return (
    <div className="popular-item">
            {all_product.map((item,i)=>{
                return i<5? <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/> :null;
            })
           }
    </div>
  )
}
