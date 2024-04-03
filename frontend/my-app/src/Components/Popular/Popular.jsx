import React from 'react'
import './Popular.css'
import { Unlayer } from './Unlayer'
import { Deuxlayer } from './Deuxlayer'

const Popular = () => {
  return (
    <div className="popular">
        <h1>Popular in&nbsp;<span> Vert</span></h1>
        <hr/>
        <Unlayer/>
        <Deuxlayer/>
    </div>
  )
}

export default Popular; 