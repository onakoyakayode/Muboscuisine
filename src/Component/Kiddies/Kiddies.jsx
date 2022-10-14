import React from 'react'

const Kiddies = () => {
  return (
    <div className='the-list animate__animated animate__fadeInLeftBig animate__delay-1s'>
        <h2>Kiddies Menu</h2>
        
        <div className='the-list-item'>
            <ul className='the-list-food'>
                <li>Hot Dogs</li>
                <li>Beef Burgers</li>
                <li>Chicken Burger</li>
                <li>Chicken Nuggets</li>
                <li>Tender Roast Chicken</li>
                <li>Chips</li>
                <li>Jollof Rice</li>
                <li>Dodo</li>
            </ul>
            <div className='the-service'>
                <div className='price-per-head'>
                    <h5>100+ kids</h5>
                    <h5>4,000 Per Head</h5>
                </div>
                <div className='price-per-head'>
                    <h5>51 - 100 kids</h5>
                    <h5>5,000 Per Head</h5>
                </div>
                <div className='price-per-head'>
                    <h5>21 - 50 kids</h5>
                    <h5>6,000 Per Head</h5>
                </div>
                <div className='price-per-head'>
                    <h5>16 - 20 kids</h5>
                    <h5>7,000 Per Head</h5>
                </div>
                <div className='price-per-head'>
                    <h5>10 - 15 kids</h5>
                    <h5>9,000 Per Head</h5>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Kiddies