import React from 'react'
import './Price.css'
import { Link } from 'react-router-dom'

const Price = () => {
  return (
    <div className='price' id='priceList'>
        <div className='price-item'>
            <h2 className='price-item-title'>Price Menu</h2>
            <p className='price-item-alert'>Please, Confirm prices before placing order!!!</p>
        </div>
        <div className="price-links active">
           <Link className='b'  to='/hampton'>
                <div>
                    <h3>Mini Menu</h3>
                </div>
           </Link>
           <Link className='b' to='/fullNigerianStandard'>
                <div>
                    <h3>Full Nigerian</h3>
                    {/* <span>(Standard)</span> */}
                </div>
           </Link>
           {/* <Link className='b' to='/fullNigerianExecutive'>
                <div>
                    <h3>Full Nigerian</h3>
                    <span>(Executive)</span>
                </div>
           </Link> */}
           <Link className='b' to='/eko'>
                <div>
                    <h3>Eko Menu</h3>
                </div>
           </Link>
           <Link className='b' to='/nigeriaChinese1'>
                <div>
                    <h3>Nigeria & Chinese</h3>
                </div>
           </Link>
           {/* <Link className='b' to='/nigeriaChinese2'>
                <div>
                    <h3>Nigeria & Chinese (II)</h3>
                </div>
           </Link> */}
           {/* <Link className='b' to='/nigeriaChinese3'>
                <div>
                    <h3>Nigeria & Chinese (III)</h3>
                </div>
           </Link> */}
           <Link className='b' to='/executiveBuffet'>
                <div>
                    <h3>Executive Buffet</h3>
                </div>
           </Link>
           <Link className='b' to='/continental'>
                <div>
                    <h3>Continental Menu</h3>
                    {/* <span>(Standard)</span> */}
                </div>
           </Link>
           {/* <Link className='b' to='/chineseStandard'>
                <div>
                    <h3>Chinese Menu</h3>
                    <span>(Standard)</span>
                </div>
           </Link> */}
           <Link className='b' to='/chineseExecutive'>
                <div>
                    <h3>Chinese Menu</h3>
                    {/* <span>(Standard/Deluxe & Executive)</span> */}
                </div>
           </Link>
           <Link className='b' to='/thai'>
                <div>
                    <h3>Thai Menu</h3>
                </div>
           </Link>
           <Link className='b' to='/indian'>
                <div>
                    <h3>Indian Menu</h3>
                    {/* <span>Min. of 20 Guests</span> */}
                </div>
           </Link>
           <Link className='b' to='/twoCourse'>
                <div>
                    <h3>2-Course Lunch Meal</h3>
                </div>
           </Link>
           <Link className='b' to='/dessert'>
                <div>
                    <h3>Dessert Menu</h3>
                </div>
           </Link>
           <Link className='b' to='/kiddies'>
                <div>
                    <h3>Kiddies Menu</h3>
                </div>
           </Link>
           <Link className='b' to='/breakfast'>
                <div>
                    <h3>Breakfast Menu</h3>
                </div>
           </Link>
           {/* <Link className='b' to='/'>
                <div>
                    <h3>Hearty</h3>
                </div>
           </Link> */}
           {/* <Link className='b' to='/'>
                <div>
                    <h3>Nigerian</h3>
                </div>
           </Link> */}
           {/* <Link className='b' to='/'>
                <div>
                    <h3>Nigeria Deluxe</h3>
                </div>
           </Link> */}
           {/* <Link className='b' to='/'>
                <div>
                    <h3>Nigeria & Continental</h3>
                </div>
           </Link> */}
           {/* <Link className='b' to='/'>
                <div>
                    <h3>Extravaganze</h3>
                </div>
           </Link> */}
           <Link className='b' to='/fingerFood'>
                <div>
                    <h3>Finger Foods</h3>
                </div>
           </Link>
           {/* <Link className='b' to='/'>
                <div>
                    <h3>snacks</h3>
                </div>
           </Link> */}
        </div>
    </div>
  )
}

export default Price;