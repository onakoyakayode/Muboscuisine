import React from 'react'
import Chop from './Chop'
import Food from './ChopFood'

const Chops = () => {
  const chops = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1.5rem',
    width: '100%',
    flexWrap: 'wrap',
}
  return (
    <div style={chops}>
      {Food.map((food, index) => <Chop key={index} food={food} />)}
    </div>
  )
}

export default Chops