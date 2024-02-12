import React from 'react'
import gpay from '../Assets/google-pay.png'
import visa from '../Assets/visa.png'
import card from '../Assets/card.png'
import stripe from '../Assets/stripe.png'
import './Footer.css'
import 'boxicons';

const Footer = () => {
  return (
    <div>
        <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
        <footer className="section-p1">
            <div className="col">
                <h4>Contact</h4>
                <p><strong>Address:</strong> 9 Ruelle Bournaire, 56785 Bordeaux</p>
                <p><strong>Phone:</strong> (+33) 0985479826 / (+33) 4031940310 </p>
                <div class="follow">
                    <h4>Follow Us</h4>
                    <div class="icon">
                        <box-icon type='logo' name='meta'></box-icon>
                        <box-icon name='instagram' type='logo' ></box-icon>
                        <box-icon name='github' type='logo' ></box-icon>
                    </div>
                </div>
            </div>
            <div className="col-install">
                <p>Secured Payment Gateways</p>
                <img src={gpay}/>
                <img src={visa}/>
                <img src={card}/>
                <img src={stripe}/>
            </div>
        </footer>
        <div className="copyright">
            <p>&#169; 2023, FloralFusion - Developed by AarDG10 | Leebro10 | ananyasolanki1</p>
        </div>
    </div>
  )
}
export default Footer;
