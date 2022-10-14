import React from 'react'

const Soup = ({soup}) => {
  return (
    <div>
        <div className='intercontinental-food animate__animated animate__fadeInBottomLeft'>
            <div className='intercontinental-food-image'>
              <img src={soup.image} alt="food" className='intercontinental-img' />
            </div>
            <h3 className='intercontinental-food-title'>{soup.title}</h3>
            <p>{soup.details}</p>
            <h4>Price: <span>₦{soup.price}</span></h4>
          </div>
    </div>
  )
}

export default Soup