import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
 
    // let [bodyStyle, setBodyStyle] = useState(true);

  return (
    <nav>
        <input type="checkbox" id="chk-box" />
        <div className="logo">STS Education India</div>
        <div className="links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/course">Courses</NavLink>
            <NavLink to="/onlineLearn" style={{color: '#CF1020'}}>Online Learning</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </div>
        <label htmlFor="chk-box"><i className="fa-solid fa-bars"></i></label>
    </nav>
  )
}

export default Navbar
