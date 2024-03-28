import React from 'react'
import './Popular.css'
import data_product from '../Assets/all_product'
import Item from '../Item/Item'

export const Deuxlayer = () => {
  return (
    <div className="popular-item">
            {data_product.map((item,i)=>{
                return i>3? <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/> :null;
            })
           }
    </div>
  )
}
