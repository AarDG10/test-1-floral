import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <section id="news"  className="section-p1 section-m1">
        <div className="news-text">
            <h3>Sign Up to Our Evergreen Newsletter</h3>
            <p>Get E-Mail Updates about our latest shop and <span>Special Offers!</span></p>
        </div>
        <div className="form">
            <input type="text" placeholder="Please Enter Valid E-Mail Address"/>
            <button className="button-5">Sign Up</button>
        </div>
    </section>
  )
}
export default Newsletter;