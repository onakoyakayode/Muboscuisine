import React from 'react'
import Food from '../AllItems/AllFood'
import Allitems from './Allitems'

const AllItemsFood = () => {

  const style = {
    
  }

  return (
    <div style={style} className='all-items-food'>
        {Food.map((food, index) => <Allitems key={index} food={food}/>)}    
    </div>
    
  )
}

export default AllItemsFood