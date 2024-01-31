import React from 'react'
import './Navbar.css'

const Navbar = () => {
    
    // let [bodyStyle, setBodyStyle] = useState(true);

  return (
    <nav>
        <input type="checkbox" id="chk-box" />
        <div className="logo">STS Education India</div>
        <div className="links">
            <a href="#" className="active">Home</a>
            <a href="#">About</a>
            <a href="#">Courses</a>
            <a href="#">Online Learning</a>
            <a href="#">Contact</a>
        </div>
        <label htmlFor="chk-box"><i className="fa-solid fa-bars"></i></label>
    </nav>
  )
}

export default Navbar
