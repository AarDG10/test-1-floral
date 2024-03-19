import React from 'react'
import './Popular.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'
import { Unlayer } from './Unlayer'
import { Deuxlayer } from './Deuxlayer'

const Popular = () => {
  return (
    <div className="popular">
        <h1>Popular in <span>Vert</span></h1>
        <hr/>
        <Unlayer/>
        <Deuxlayer/>
    </div>
  )
}

export default Popular; 