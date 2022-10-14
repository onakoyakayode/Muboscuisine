import React from 'react'
import Price from '../Price/Price'
import './Pricelist.css'

const Pricelist = ({children}) => {
  return (
    <div className='price-list-container'>
        <div className='price-container'>
            <Price />
        </div>
        <div className='price-children-container'>
            {children}
        </div>
        <div className='price-service'>
            <h3>Our services include:</h3>
            <li className='price-service-list'>Crockery</li>
            <li>Uniformed Waiters</li>
            <li>Chaffing Dishes</li>
            <div className='service-charge'>
                <h4>Service Charge (Within Lagos)</h4>
                <h4>15% of Total</h4>
            </div>
            <div className='service-charge'>
                <h4>Service Charge (Outside Lagos)</h4>
                <h4>35% of Total</h4>
            </div>
            <div className='personalized-menu-card'>
                <h4>*Personalized Menu Card is calculated at an extra charge</h4>
                <h4>*Transportation is calculated in accordance to volume and distance</h4>
                <h4>*Accommodation- Outside Lagos only to be provided by client/charged for</h4>
            </div>
            <div className='payment'>
                <p>80% in advance before the event and 20% after the event.</p>
                <p>Cheques should be made payable to "MUBOSCUISINE CATERING SERVICES"</p>
            </div>
        </div>
    </div>
  )
}

export default Pricelist