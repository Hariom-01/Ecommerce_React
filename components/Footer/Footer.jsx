import React from 'react'
import './Footer.css'
import {assets} from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
     <img src={assets.logo} alt="" />
     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas excepturi ab totam et? Consequuntur quaerat aperiam modi adipisci dolor dolores, minus vitae beatae at nemo dolore, iste, illum voluptatem est.</p>
     <div className="footer-social-icon">
      <img src={assets.facebook_icon} alt="" />
      
      <img src={assets.linkedin_icon} alt="" />
      <img src={assets.twitter_icon} alt="" />
     </div>
        </div>
        <div className="footer-content-right">
      <h2>get in touch</h2>
      <ul>
        <li>123456789</li>
        <li>abc@gmail.com</li>
      </ul>

        </div>
        <div className="footer-content-center">
           <h2>Company</h2>
           <ul>
            <li>Home</li>
            <li>About us</li>
            <li> Delivery</li>
            <li> Privacy policy</li>
           </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copy">
         copyright 2024 @ tomatocom -all right
      </p>
    </div>
  )
}

export default Footer
