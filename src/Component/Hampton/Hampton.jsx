import React from 'react'
import './Hampton.css'

const Hampton = () => {
  return (
    <div className='the-list animate__animated animate__fadeInLeftBig animate__delay-1s'>
        <h2>Mini Menu</h2>
        <div className='the-list-item'>
            <ul className='the-list-food'>
                <li>Jollof rice</li>
                <li>Fried rice</li>
                <li>Pounded Yam/Amala/Semovita</li>
                <li>Egusi/Efo riro</li>
                <li>Assorted Beef stew</li>
                <li>Curry Chicken or Stewed Chicken</li>
                <li>Moi-Moi</li>
                <li>Dodo</li>
                <li>Salad</li>
            </ul>
            <div className='the-service'>
                <div className='price-per-head'>
                    <h5>Buffet Service 100+</h5>
                    <h5>5,000 Per guest</h5>
                </div>
                <div className='price-per-head'>
                    <h5>Plated Service 100+</h5>
                    <h5>3,000 Per guest</h5>
                </div>
                <div className='price-per-head'>
                    <h5>51 - 100 guests</h5>
                    <h5>3,500 Per guest</h5>
                </div>
                <div className='price-per-head'>
                    <h5>21 - 50 guests</h5>
                    <h5>4,000 Per guest</h5>
                </div>
                <div className='price-per-head'>
                    <h5>16 - 20 guests</h5>
                    <h5>4,500 Per guest</h5>
                </div>
                <div className='price-per-head'>
                    <h5>10 - 15 guests</h5>
                    <h5>6,000 Per guest</h5>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hampton