import React from 'react'
import './About.css'
import HalfImage from './img/About-img/HalfImage.jpg'
import Lern from './reuse/Lern'
import CountingUpPage from './reuse/CountingUpPage'
import GetInTouch from './img/Home-img/GetInTouch.jpg'
import GetInTouch2 from './img/Home-img/GetInTouch2.jpg'
import EnrollPage from './reuse/EnrollPage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faStar } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  return (
    <>



      {/* =================================== Hero Banner ================================== */}

      <div className="herobanner">
        <img src="https://img.freepik.com/premium-photo/image-young-student-happy-man-library-doing-homework-studying-read-using-laptop-computer_171337-56681.jpg?size=626&ext=jpg&ga=GA1.1.865498950.1686581242&semt=ais" alt=''
        style={{ filter: "blur(2px) brightness(50%)" }} />

        <div className="heroBanner_text">
          <p>Home <FontAwesomeIcon icon={faAngleRight} /> About us <FontAwesomeIcon icon={faAngleRight} /></p>
          <h1>About Us</h1>
        </div>

      </div>
      {/* =================================== Hero Banner ================================== */}

      <Lern GetInTouch={GetInTouch} GetInTouch2={GetInTouch2} />
      <CountingUpPage />

      {/* ======================================== Main_Container ========================================*/}
      <div className="main_container">
        <img src={HalfImage} alt='' />

        {/* ============ Half-Screen-Box ============*/}
        <div className="half_screen_box">
          <div className="half_screen_text_box">
            <h5>TESTIMONIAL</h5>
            <h1>What Our Students Says</h1>
          </div>
        </div>
        {/* ============ Half-Screen-Box ============*/}

        {/* ============= Parent-Card-Box =============*/}
        <div className="card_parent_box">
          {/* === First-Card ===*/}
          <div className="card">
            <div className="star_box">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <p>One thing that is important for lives we should follow them also accept the modernized way of
              life. As the computer will take a special place in our lives everyone needs to know about it. So I learn
              computer online for business purpose. I joined STS education. Their work is appricable.
              The Institute also helps to get good jobs in companies.
            </p>

            <div className="cir_box_container">
              <div className="circle_img"><img src="https://img.freepik.com/free-photo/portrait-boy-red-jacket-3d-rendering_1142-38842.jpg?size=626&ext=jpg&ga=GA1.1.865498950.1686581242&semt=ais" alt='' /></div>
              <div className="cir_text">
                <h1>Nikhil</h1>
                <h5>Web developer</h5>
              </div>
            </div>
          </div>
          {/* === First-Card ===*/}

          {/* === Second-Card ===*/}

          <div className="card">
            <div className="star_box">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <p>One thing that is important for lives we should follow them also accept the modernized way of
              life. As the computer will take a special place in our lives everyone needs to know about it. So I learn
              computer online for business purpose. I joined STS education. Their work is appricable.
              The Institute also helps to get good jobs in companies.
            </p>

            <div className="cir_box_container">
              <div className="circle_img"><img src="https://img.freepik.com/free-photo/one-young-adult-posing-with-futuristic-eyeglasses-generated-by-ai_188544-19658.jpg?size=626&ext=jpg&ga=GA1.1.865498950.1686581242&semt=ais" alt='' /></div>
              <div className="cir_text">
                <h1>Sharad Kumar</h1>
                <h5>Web developer</h5>
              </div>
            </div>
          </div>

          {/* === Second-Card ===*/}

          {/* === Third-Card ===*/}
          <div className="card">
            <div className="star_box">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <p>I highly recommend this insitute for computer science enthusiasts. The institute offer a variety of courses
              and programs in computer science, and the faculty members are experts in their fields. The institute also has a modernized
              lab and library, and organizes workshops and seminars for the students.
              The Institute also helps to get good jobs in companies.
            </p>

            <div className="cir_box_container">
              <div className="circle_img"><img src="https://img.freepik.com/free-photo/man-portrait-with-blue-lights-visual-effects_23-2149419470.jpg?size=626&ext=jpg&ga=GA1.1.865498950.1686581242&semt=ais" alt='' /></div>
              <div className="cir_text">
                <h1>Ayush Tiwari</h1>
                <h5>web developer</h5>
              </div>
            </div>
          </div>
          {/* === Third-Card ===*/}

          {/* === Forth-Card ===*/}
          <div className="card">
            <div className="star_box">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <p>This institute is a great place to learn computer scrience. The teacher are knowledgeable and supportive,
              and the courses are up-to-date and relevant. The institute also has a good infrastructure and facilities, and
              porvides placement assisteance to the students. I am very happy with my computer science education
              from this institute.
            </p>

            <div className="cir_box_container">
              <div className="circle_img"><img src="https://img.freepik.com/free-photo/3d-cartoon-style-character_23-2151034029.jpg?size=626&ext=jpg&ga=GA1.1.865498950.1686581242&semt=ais" alt='' /></div>
              <div className="cir_text">
                <h1>Shubham Patel</h1>
                <h5>Digital Marketer</h5>
              </div>
            </div>
          </div>
          {/* === Forth-Card ===*/}
        </div>
        {/* ============= Parent-Card-Box =============*/}
      </div >
      {/* ======================================== Main_Container ======================================== */}



      
      
      <EnrollPage InfoTitle={'We are STS Education an online learning center'} Information={'We can manage your dream building A small river named Duden flows by their place'} BUTTON={''} />
    </>
  )
}

export default About
