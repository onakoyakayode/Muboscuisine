import React from 'react'
import './Book.css'

function Book() {

  return (
    <div className='book' id='book'>
        <div className='book-title'>
          <h2>Book Us For Your Event</h2>
          <p>Some Trendy And Popular Courses Offerd</p>
        </div>
        <div className='book-warning'>
          <h4>You can only book for an event, 3 weeks before the D-day.</h4>
        </div>
        <form className='book-form' action="">
          <div className='booking-details-name'>
            <input type="text" className='name' name="name" placeholder='Enter Your Name' />
            <input type="email" className='email' name="email" placeholder='Email Address' />
          </div>
          <div className='booking-details-name'>
            <input type="phone" className='phone' name="phone" placeholder='Telephone Number' />
            <select>
              <option className='guests' value="">Number of Guest</option>
              <option value="Buffet service 100+">Buffet service 100+</option>
              <option value="Plated service 100+">Plated service 100+</option>
              <option value="51-100">51-100</option>
              <option value="21-50">21-50</option>
              <option value="16-20">16-20</option>
              <option value="10-15">10-15</option>
            </select>
          </div>
          <div className='booking-details-name'>
            <input type="text" name="location" id="location" placeholder='Location?' />
            <select name="" id="">
              <option className='foodMenu' value="">Food Menu</option>
              <option value="Mini Menu">Mini Menu</option>
              <option value="Eko Menu">Eko Menu</option>
              <option value="Executive Buffet">Executive Buffet</option>
              <option value="Continental Menu">Continental Menu</option>
              <option value="Thai Menu">Thai Menu</option>
              <option value="Indian Menu">Indian Menu</option>
              <option value="Dessert Menu">Dessert Menu</option>
              <option value="Kiddies Menu">Kiddies Menu</option>
              <optgroup label='Full Nigerian Menu'>
                <option value="Full Nigerian Standard">Full Nigerian (Standard)</option>
                <option value="Full Nigerian Executive">Full Nigerian (Executive)</option>
              </optgroup>
              <optgroup label='Nigeria & Chinese'>
                <option value="Nigeria & Chinese 1">Nigeria & Chinese I</option>
                <option value="Nigeria & Chinese 2">Nigeria & Chinese II</option>
                <option value="Nigeria & Chinese 3">Nigeria & Chinese III</option>
              </optgroup>
              <optgroup label="Chinese Menu">
                <option value="Chinese Menu Standard">Chinese Menu (Standard)</option>
                <option value="Chinese Menu Executive">Chinese Menu (Standard/Deluxe & Executive)</option>
              </optgroup>
              <optgroup label="2-Course Lunch Meal">
                <option value="2-Course Starters">Starters</option>
                <option value="2-Course Main Menu">Main Menu</option>
                <option value="2-Course Desserts">Desserts</option>
              </optgroup>
              <optgroup label="Breakfast Menu">Breakfast Menu
                <option value="Continental">Continental</option>
                <option value="Nigerian">Nigerian</option>
                <option value="Hearty">Hearty</option>
                <option value="Nigerian Deluxe">Nigerian Deluxe</option>
                <option value="Nigerian & Continental">Nigerian & Continental</option>
                <option value="Extravaganze">Extravaganze</option>
              </optgroup>
              <optgroup label="Finger Foods">
                <option value="Finger Food option1">Option 1</option>
                <option value="Finger Food option 2">Option 2</option>
                <option value="Finger Food snacks">Snacks</option>
              </optgroup>
            </select>
          </div>
          <div className='booking-details-name'>
            <input 
              type="text"
              onFocus={(e) => (e.target.type="date")}
              onBlur={(e) => (e.target.type="text")}
              className='date'
              name="date" 
              placeholder="Date format (mm-dd-yyyy)"
            />
            <select>
              <option className='time' value="">Time</option>
              <option value="">Morning</option>
              <option value="">Afternoon</option>
              <option value="">Night</option>
            </select>
          </div>
          <div className='book-btn'>
            <button>Submit</button>
          </div>
        </form>
    </div>
  )
}

export default Book