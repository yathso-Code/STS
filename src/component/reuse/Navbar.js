import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  let [newClass, setNewClass]  = useState('');

 window.addEventListener('scroll', ()=> {
  let Scrolled = window.scrollY;
  // console.log(Scrolled)
  if(Scrolled >= 320){
    setNewClass('Fixed-Navbar');
}else {
    setNewClass('');
}
 })

    return (
      <nav className={newClass}>
        <input type="checkbox" id="chk-box" />
        <div className="logo">STS Education India</div>
        <div className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/course">Courses</NavLink>
        <NavLink to="/onlineLearn">Online Learning</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        </div>
        <label htmlFor="chk-box"><FontAwesomeIcon icon={faBars} /></label>
      </nav>
    )
  }

export default Navbar
