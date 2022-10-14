import React from 'react'

const Continental = () => {
  return (
    <div className='the-list animate__animated animate__fadeInLeftBig animate__delay-1s'>
        <h2>Continental Menu (Standard)</h2>
        
        <div className='the-list-item'>
            <ul className='the-list-food'>
                <li>Chicken in a creamy mushroom sauce</li>
                <li>Steak in black pepper sauce</li>
                <li>Pan fried fish in lemon butter sauce</li>
                <li>Prawns in garlic herb butter</li>
                <li>Steamed Vegetables</li>
                <li>Sauteed Potatoes</li>
                <li>Parsley Potatoes</li>
                <li>Spicy rice</li>
                <li>Roasted Potatoes</li>
            </ul>
            <div className='the-service'>
                <div className='price-per-head'>
                    <h5>Buffet Service 100+ guests</h5>
                    <h5>17,500 Per Head</h5>
                </div>
                <div className='price-per-head'>
                    <h5>Plated Service 100+ guests</h5>
                    <h5>9,500 Per Head</h5>
                </div>
                <div className='price-per-head'>
                    <h5>51 - 100 guests</h5>
                    <h5>11,500 Per Head</h5>
                </div>
                <div className='price-per-head'>
                    <h5>21 - 50 guests</h5>
                    <h5>13,500 Per Head</h5>
                </div>
                <div className='price-per-head'>
                    <h5>16 - 20 guests</h5>
                    <h5>17,500 Per Head</h5>
                </div>
                <div className='price-per-head'>
                    <h5>10 - 15 guests</h5>
                    <h5>21,000 Per Head</h5>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Continental