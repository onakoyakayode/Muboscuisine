import React from 'react'
import './Menu.css'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <div className='menu' id='menu'>
        <div className='menu-items'>
            <h2 className='menu-items-title'>Offered Menu</h2>
            <h4 className='menu-items-sub-title'>Some Trendy and popular courses offered</h4>
        </div>
        <div className='menu-links'>
            <Link className='a' to='/allitems'>
                <div className='active'>
                    <h3>All Items</h3>
                    <span>Fresh & Delicious</span>
                </div>
            </Link>
            <Link className='a' to='/intercontinental'>
                <div>
                    <h3>Intercontinental</h3>
                    <span>Fresh & Delicious</span>
                </div>
            </Link>
            <Link className='a' to='/soups'>
                <div>
                    <h3>Soups</h3>
                    <span>Fresh & Delicious</span>
                </div>
            </Link>
            <Link className='a' to='/localdish'>
                <div>
                    <h3>Local dish</h3>
                    <span>Fresh & Delicious</span>
                </div>
            </Link>
            <Link className='a' to='/chops'>
                <div>
                    <h3>Cakes & Chops</h3>
                    <span>Fresh & Delicious</span>
                </div>
            </Link>

        </div>
    </div>
  )
}

export default Menu