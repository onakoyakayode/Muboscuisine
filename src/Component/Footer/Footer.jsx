import React from 'react'
import './Footer.css'
import facebook from '../../icon/facebook.svg'
import instagram from '../../icon/instagram.svg'
import whatsapp from '../../icon/whatsapp.svg'
import twitter from '../../icon/twitter.svg'

const Footer = () => {

    function Facebook() {
        window.location.href="http://www.facebook.com"
    }

    function Instagram() {
        window.location.href="http://www.instagram.com"
    }




  return (
    <div className='footer' id='footer'>
        <div className='footer-x'>
            <div className='footer-address'>
                <h2>Muboscuisine</h2>
                <address className='address'>
                    13, Oba Akinjobi Crescent, Magboro, Ogun State.
                </address>
                <div className='phone'>
                    <a href='tel:+2348109838474'>+2348063737373,</a>
                    <a href='tel:+2348109838474'>+2348080818283</a>
                </div>
                <div className='mail'>
                    <a href="mailto:muboscuisine@gmail.com">muboscuisine@gmail.com</a>
                </div>
            </div>
            <div className='service'>
                <h3>Our Services</h3>
                <ul>
                    <li>Indoor Catering</li>
                    <li>Outdoor Catering</li>
                    <li>Buffet Service</li>
                    <li>Social Event</li>
                    <li>Delivery</li>
                </ul>
            </div>
            <div className='food-menu'>
                <h3>The Menu</h3>
                <ul>
                    <li>Special Item</li>
                    <li>Fresh Breakfast</li>
                    <li>Lunch Menu</li>
                    <li>Dinner Food</li>
                    <li>Finger Licks</li>
                </ul>
            </div>
            <div className='empty'></div>
        </div>
        <div className='footer-line'></div>
        <div className='footer-links'>
            <div className='footer-copy'>
                <h6>&copy; 2022, Muboscuisuine Catering service. All right reserved</h6>
            </div>
            <ul className='social-links'>
                <li className='social-icon'>
                    <img src={whatsapp} alt="whatsapp"/>
                </li>
                <li className='social-icon'>
                    <img onClick={Facebook} src={facebook} alt="facebook"/>
                </li>
                <li className='social-icon'>
                    <img onClick={Instagram} src={instagram} alt="instagram"/>
                </li>
                <li className='social-icon'>
                    <img src={twitter} alt="twitter"/>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer