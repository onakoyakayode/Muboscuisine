import React from 'react'
import './Intercontinental.css'


function Intercontinental({food}) {
  return (
      <div className='intercontinental-container'>
          <div className='intercontinental-food animate__animated animate__fadeInBottomLeft'>
            <div className='intercontinental-food-image'>
              <img src={food.image} alt="food" className='intercontinental-img' />
            </div>
            <h3 className='intercontinental-food-title'>{food.title}</h3>
            <p>{food.details}</p>
            <h4>Price: <span>₦{food.price}</span></h4>
          </div>
      </div>
    
  )
}

export default Intercontinental