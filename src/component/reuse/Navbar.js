import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  let [newClass, setNewClass]  = useState('');

// =================scroll to show navbar in fiew range=====================
 window.addEventListener('scroll', ()=> {
  let Scrolled = window.scrollY;
  // console.log(Scrolled)
  // window.scrollY =0
  if(Scrolled >= 320){
    setNewClass('Fixed-Navbar');
}else {
    setNewClass('');
}
 })
// ==============close the nav bar ===================
 function closeNav(){
   // Get the element to scroll to (for example, the body element)
   const bodyElement = document.body;

   // Scroll to the top of the page smoothly
   bodyElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  document.getElementById('chk-box').checked = false;
 }

    return (
      <nav className={newClass}>
        <input type="checkbox" id="chk-box" />
        <div className="logo">STS Education India</div>
        <div className="links" id='links'>
        <NavLink to="/" onClick={closeNav} >Home</NavLink>

        <NavLink to="/about" onClick={closeNav} >About</NavLink>

        <NavLink to="/course" onClick={closeNav} >Courses</NavLink>

        <NavLink to="/onlineLearn"  onClick={closeNav}>Learning</NavLink>

        <NavLink to="/contact"  onClick={closeNav} >Contact</NavLink>
          
        </div>
        <label htmlFor="chk-box"><FontAwesomeIcon icon={faBars} /></label>
      </nav>
    )
  }

export default Navbar
