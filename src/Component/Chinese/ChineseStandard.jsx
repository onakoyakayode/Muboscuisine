import React from 'react'

const ChineseStandard = () => {
  return (
    <div className='the-list'>
        <h2>Chinese Menu (Standard)</h2>
        
        <div className='the-list-item'>
            <ul className='the-list-food'>
                <li>Chinese rice</li>
                <li>Singaporean Noodles</li>
                <li>Shredded beef with green pepper in oyster sauce</li>
                <li>Diced chicken with mixed vegetable in soy sauce</li>
                <li>Prawns in sweet chili sauce</li>
            </ul>
            <div className='the-service'>
                <div className='price-per-head'>
                    <h5>Buffet Service 100+ guests</h5>
                    <h5>12,500 Per Head</h5>
                </div>
                <div className='price-per-head'>
                    <h5>Plated Service 100+ guests</h5>
                    <h5>8,500 Per Head</h5>
                </div>
                <div className='price-per-head'>
                    <h5>51 - 100 guests</h5>
                    <h5>9,500 Per Head</h5>
                </div>
                <div className='price-per-head'>
                    <h5>21 - 50 guests</h5>
                    <h5>10,500 Per Head</h5>
                </div>
                <div className='price-per-head'>
                    <h5>16 - 20 guests</h5>
                    <h5>12,000 Per Head</h5>
                </div>
                <div className='price-per-head'>
                    <h5>10 - 15 guests</h5>
                    <h5>15,000 Per Head</h5>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChineseStandard