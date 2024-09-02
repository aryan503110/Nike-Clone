import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = ({count}) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="https://img.etimg.com/thumb/msid-59738997,width-640,height-480,imgsize-21421,resizemode-4/nike.jpg" alt="Nike logo" />
        </div>
        <ul className="navbar-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/product">Product</Link></li>
          <li><Link to="/cart">Cart<sup className='super'>{count}</sup></Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar