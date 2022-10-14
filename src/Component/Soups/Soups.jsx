import React from 'react'
import Soup from './Soup'
import SoupVarieties from './SoupVarieties'

function Soups() {

  const soup = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1.5rem',
    width: '100%',
    flexWrap: 'wrap',
  }


  return (
    <div style={soup}>
        {SoupVarieties.map((soup, index) => <Soup key={index} soup={soup} />)}
    </div>
  )
}

export default Soups;