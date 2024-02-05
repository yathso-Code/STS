import React from 'react'
import './Contact.css'
import GoogleMap from './reuse/GoogleMap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faPaperPlane, faPhone, faEarth } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  return (
    <>
      <div className='image_box'>
        <div className='home'>Home <FontAwesomeIcon icon={faAngleRight} />
          Contact us  <FontAwesomeIcon icon={faAngleRight} /> </div>
        <h1>Contact us</h1>
      </div>

      <div className='info'>
        <div className='box1'>
          <div className='let'>Let's get in touch</div>
          <div className='we'>We're open for any suggestion or<br /> just to have a chat</div>
          <div className='email'>
            <div className='circle'><FontAwesomeIcon icon={faPaperPlane} /></div>
            <div className='email1'>Email : <br />contact@stseducationindia.com</div>
          </div>

          <div className='email'>
            <div className='circle'><FontAwesomeIcon icon={faPaperPlane} /></div>
            <div className='email1'>Email : <br />info@stseducationindia.com</div>
          </div>

          <div className='email'>
            <div className='circle'><FontAwesomeIcon icon={faPhone} /></div>
            <div className='email1'>Contact No:<br /> +91 6202 25 44 50</div>
          </div>

          <div className='email'>
            <div className='circle'><FontAwesomeIcon icon={faEarth} /></div>
            <div className='email1'>Website <br />stseducationindia.com</div>
          </div>
        </div>


        <div className='box2'>
          <div className='heading'>Get in touch</div>
          <form >

            <div className="text-box">
              <label>FULL NAME</label>
              <input type="text" placeholder='Name' />
            </div>
            <div className="text-box">
              <label>EMAIL ADDRESS</label>
              <input type="text" placeholder='Email' />
            </div>
            <div className="text-box">
              <label>SUBJECT</label>
              <input type="text" placeholder='Subject' />
            </div>
            <div className="text-box">
              <label>MESSAGE</label>
              <textarea type="text" placeholder='Message' />
            </div>

            <button>Send Message</button>

          </form>
        </div>
      </div>
      <GoogleMap />
    </>
  )
}

export default Contact
