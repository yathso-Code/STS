import React from 'react'
import './Lern.css'


const Lern = ( {GetInTouch, GetInTouch2}) => {
  return (
    <div>
    <div className="SlideToContacts flex">
    <div className="box">
    <div className="image">
    <img src={GetInTouch} alt='Getin' />
    </div>
    <div className="image">
    <img src={GetInTouch2} alt='Getin' />
    </div>
    </div>
    <div className="info flex-coloumn">
    <p>ENHANCE YOUR SKILLS</p>
    <p>Learn Anything You Want Today</p>
    <p>We provide most of the Computer Education in minimum cost
    and maximum quality. We conduct our classes offline and online
    too with live classes and study material will be given by our team
    for extra care.</p>
        <button>Get in touch with us</button>
    </div>
    </div>
    
    </div>
  )
}

export default Lern
