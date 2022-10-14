import React from 'react'
import Food from '../AllItems/AllFood'
import Intercontinental from './Intercontinental'

const IntercontinentalFood = () => {

    const intercontinental = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1.5rem',
        width: '100%',
        flexWrap: 'wrap',
    }


  return (
    <div style={intercontinental} className='intercontinental'>
        {Food.map((food, index) => <Intercontinental key={index} food={food} />)}
    </div>
  )
}

export default IntercontinentalFood