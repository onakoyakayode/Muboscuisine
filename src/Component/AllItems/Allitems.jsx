import React from 'react'
import './Allitems.css'

const Allitems = ({food}) => {
  console.log(food)
  return (
   
    <div className="all-items-container">
        <div className='all-items-details animate__animated animate__fadeInBottomLeft'>
          <div className='all-items-image'>
            <img src={food.image} alt="food" className='all-items-img' />
          </div>
          <h3 className='all-items-title'>{food.title}</h3>
          <p>{food.details}</p>
          <h4>Price: <span>₦{food.price}</span></h4>
        </div>
    </div>
    
    
  )
}

export default Allitems;