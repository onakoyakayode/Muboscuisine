import React from 'react'
import LocalDishes from './LocalDishes';
import Food from './localFood'

const LocalDish = () => {
  const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1.5rem',
    width: '100%',
    flexWrap: 'wrap',
  }
  return (
    <div style={style}>
        {Food.map((food, index) => <LocalDishes key={index} food={food} />)}
    </div>
  )
}

export default LocalDish;