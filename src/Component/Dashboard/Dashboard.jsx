import React from 'react'
import Menu from '../Menu/Menu'
import './Dashboard.css'



const Dashboard = ({children}) => {
  return (
    <div className='dashboard'>
        <div className='dashboard-container'>
            <div>
                <Menu />
            </div>
            <div className='dashboard-children'>
                {children}               
            </div>
        </div>
    </div>
  )
}

export default Dashboard