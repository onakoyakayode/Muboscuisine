import React from 'react'

import './Header.css'
import 'animate.css';

function Header() {

  function priceList(){
    window.location.href='#priceList';
  }

  function eventReservation() {
    window.location.href='#book'
  }

  return (
    <div>
      <div id='home'>
        <div className='header'>
            <div className='header-content'>
                <h2 className='header-title animate__animated animate__fadeInLeftBig'>Delicious Foods</h2>
                <h3 className='header-sub-title animate__animated animate__fadeInLeftBig animate__delay-1s'>Real Specialty of Food</h3>
                <p className='animate__animated animate__fadeInLeftBig animate__delay-2s'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum ducimus reprehenderit cum quos, expedita delectus voluptatibus doloremque aliquam. Maiores eos quo aperiam dolorum necessitatibus dolore nulla voluptate tempora inventore illum.</p>
                <div className='header-button'>
                    <button onClick={priceList} className='header-order-btn animate__animated animate__fadeInLeftBig animate__delay-4s'>Order Now</button>
                    <button onClick={eventReservation} className='header-reserve-btn animate__animated animate__fadeInLeftBig animate__delay-3s'>Event Reservation</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header