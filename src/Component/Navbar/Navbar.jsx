import React from 'react'
import './Navbar.css'
// import toggleButton from '../../icon/filter-right.svg'
import MuboLogo from '../../image/logo.jpg'


function Navbar() {

  // const [showNav, setShowNav] = useState(true)

  // const styles = {
  //   left: showNav? '0' : "-100%",
  //   transition: "all 0.3s ease-in-out"
  // }

  // const toggleNav = () => {
  //   setShowNav(!showNav)
  // }

  return (
    // <nav className='navbar'>
    //     <a href='#home' className='nav-logo'>
    //         <img src={MuboLogo} className="nav-logo-img" alt='nav-logo' />
    //     </a>
        
    //     {showNav && <ul style={styles} className='nav-lists'>
    //       <a href='#home'>
    //         <h4 className='link'>Home</h4>
    //       </a>
    //       {/* <a onClick={() => setShowNav(!showNav)} >
    //         <h4 className='link'>Menu</h4>
    //       </a> */}
    //       <div className='dropdown'>
    //         <h4 className='link menuList'>Menu</h4>
    //         <div className='dropdown-content'>
    //           <a href="#menu">Offered Menu</a>
    //           <a href="#priceList">Price Menu</a>
    //         </div>
    //       </div>
    //       <a href='#special-food'>
    //         <h4 className='link'>Special</h4>
    //       </a>
    //       <a href='#client'>
    //         <h4 className='link'>About</h4>
    //       </a>
    //       <a href='#footer'>
    //         <h4 className='link'>Contact</h4>
    //       </a>
    //       <a href='#book'>
    //         <h4 className='reserve'>Reservation</h4>
    //       </a>
    //     </ul>}
        
    //     <div className='toggle'>
    //       <img onClick={toggleNav} src={toggleButton} className='toggle-button' alt="toggle" />
    //     </div>
    // </nav>

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand nav-logo" href="#home">
          <img src={MuboLogo} className="nav-logo-img" alt='nav-logo' />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#home">Home</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#home" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Menu
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item" href="#menu">Offered Menu</a></li>
                <li><a className="dropdown-item" href="#priceList">Price Menu</a></li>
                {/* <li><a cNamelass="dropdown-item" href="#">Something else here</a></li> */}
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#special-food">Special</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#client">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#footer">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link reserved" href="#book">Reservation</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar