import React from 'react'
import './Features.css'
import delievery from '../Assets/delivery.png'
import ar from '../Assets/augmented-reality.png'
import offer from '../Assets/offer.png'
import plant from '../Assets/plant.png'

const Features = () => {
  return (
    <section id="feature" class="section-p1">
        <div class="fe-box">
            <img src={delievery}/>
            <h6>Order Tracking</h6>
        </div>
        <div class="fe-box">
            <img src={ar}/>
            <h6>AR Visuals</h6>
        </div>
        <div class="fe-box">
            <img src={offer}/>
            <h6>Cool Discounts</h6>
        </div>
        <div class="fe-box">
            <img src={plant}/>
            <h6>Wide Range of Plants</h6>
        </div>
    </section>
  )
}
export default Features;