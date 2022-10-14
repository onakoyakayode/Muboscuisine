import React from 'react'

const Dessert = () => {
  return (
    <div className='the-list animate__animated animate__fadeInLeftBig animate__delay-1s'>
        <h2>Dessert Menu</h2>
        
        <div className='the-list-item'>
            <ul className='the-list-food'>
                <li>Cheese Cake</li>
                <li>Blackforest</li>
                <li>Whiteforest</li>
                <li>Red velvet</li>
                <li>Coffee mocha</li>
                <li>Tiramisu</li>
                <li>Strawberry gateau</li>
                <li>Carrot Cake</li>
                <li>Choc Trifle</li>
                <li>Creme caramel</li>
                <li>Creme bulee</li>
                <li>Choc brownies</li>
                <li>Apple crumble</li>
                <li>Choc/Strawberry mouse</li>
                <li>Fruit Salad</li>
                <li>Waffle</li>
                <li>Ice creamy</li>
            </ul>
            <div className='the-service'>
                <div className='price-per-head'>
                    <h5>100+ guests</h5>
                    <h5>2,000 Per Head</h5>
                </div>
                <div className='price-per-head'>
                    <h5>51 - 100 guests</h5>
                    <h5>2,500 Per Head</h5>
                </div>
                <div className='price-per-head'>
                    <h5>31 - 50 guests</h5>
                    <h5>3,000 Per Head</h5>
                </div>
                <div className='price-per-head'>
                    <h5>10 - 30 guests</h5>
                    <h5>3,500 Per Head</h5>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dessert