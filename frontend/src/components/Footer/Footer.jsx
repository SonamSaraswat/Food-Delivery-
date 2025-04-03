import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">

                <img src={assets.logo} alt=""/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut ut harum nulla, hic architecto quos placeat et inventore nihil animi rem temporibus aperiam corporis accusantium id deleniti! Et, autem voluptatum.</p>
                <div className="footer-social-icons">
                <img src={assets.facebook_icon}></img>
                <img src={assets.twitter_icon}></img>
                <img src={assets.linkedin_icon}></img>

                </div>
                
            </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>Get In Touch</h2>
                    <ul>
                        <li>+1 -212-456-7890</li>
                        <li>contact@tomato.com</li>
                    </ul>

                </div>
        </div>
        <hr/>
        <p className='footer-copyright'>CopyRight 2024@tomato.com - All Right reserved</p>

    </div>
  )
}

export default Footer