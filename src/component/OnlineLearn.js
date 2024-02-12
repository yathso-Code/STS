import React from 'react'
import './OnlineLearn.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faCreditCard, faStore, faCashRegister } from '@fortawesome/free-solid-svg-icons';
import Lern from './reuse/Lern';
import img1 from './img/clint-patterson-dYEuFB8KQJk-unsplash.jpg'
import img2 from './img/ilya-pavlov-OqtafYT5kTw-unsplash.jpg'

const OnlineLearn = () => {


  return (
    <>
      {/*=============================== hero banner   ===============================*/}

      <div className="hero_banner">
        <div className="first_text">
          <span className="hero text1">Computer Education</span><FontAwesomeIcon className='i' icon={faAngleRight} />
          <span className="hero text2">Brain Science Course  </span><FontAwesomeIcon className='i' icon={faAngleRight} />
        </div>
        <h1 className="last_text">Online Learning Programme</h1>
      </div>

      {/*===============================   package  ===============================*/}

      <div className="package">
        <div className="package_detail">
          <h5>WELCOME TO STS EDUCATION</h5>
          <h3>We devide all computer Course in three package based on rupess...</h3>
          <p>This course will fully conduct by online lacture , live classses and Study materials but if student fells in any subject to need
            offline classses STS and his team also provide offline classes only student demand.
          </p>
          <p>We provide most of Computer Education in minimum cost and maximum quality.</p>
          <div className="image">
            <img  src="https://www.pngitem.com/pimgs/m/35-357850_business-man-working-man-working-on-computer-clipart.png" width="35%" height="25%" alt='' />
            <span>Joining Package</span>
          </div>
        </div>

        {/*===============================  PACKAGE PRICE  ===============================*/}

        <div className="package_price">
          <div className="first_package">
            <FontAwesomeIcon className='i' icon={faCreditCard} />
            <h3>First Package</h3>
            <p>Course in 999/-rupess</p>
            <button>view more</button>
          </div>

          <div className="second_package">
          <FontAwesomeIcon className='i' icon={faStore} /><br />
            <h3>Second Package</h3>
            <p>Course in 1999/-rupess</p>
            <button>view more</button>
          </div>

          <div className="third_package">
            <FontAwesomeIcon className='i' icon={faCashRegister} />
            <h3>Third Package</h3>
            <p>Course in 2999/-rupess</p>
            <button>view more</button>
          </div>
        </div>
      </div>

      {/*===============================   SECOND COURSE DURATION  ===============================*/}

      <div className="linear_gradient">
        <div className="second_course_table">
          <span style={{color: '#fff'}}>FRONT-END DEVELOPER</span>
          <span style={{color: '#fff'}}>+</span>
        </div>

        {/*===============================   SECOND PACKAGE TABLE  ===============================*/}

        <table className="second_package_table">
          <tr>
            <th style={{ color: '#fff', fontSize: '20px' , fontWeight: 'bold' }} >S.No</th>
            <th style={{ color: '#fff', fontSize: '20px' , fontWeight: 'bold' }}>Course Name</th>
            <th style={{ color: '#fff', fontSize: '20px' , fontWeight: 'bold' }}>Course Duration</th>
          </tr>
          <tr>
          <th>1</th>
            <th>HTML5</th>
            <th>15 DAYS</th>
          </tr>
          <tr>
          <th>2</th>
            <th>CSS3</th>
            <th>25 DAYS</th>
          </tr>
          <tr>
          <th>3</th>
            <th>JS ES6</th>
            <th>30 DAYS</th>
          </tr>
          <tr>
          <th>4</th>
            <th>BootStrap</th>
            <th>5 DAYS</th>
          </tr>
          <tr>
          <th>5</th>
            <th>CANVA</th>
            <th>7 DAYS</th>
          </tr>
          <tr>
          <th>7</th>
            <th>React</th>
            <th>15 DAYS</th>
          </tr>
          <tr>
          <th>8</th>
            <th>React JS</th>
            <th>3 DAYS</th>
          </tr>
          <tr>
          <th>9</th>
            <th>Git</th>
            <th>4 DAYS</th>
          </tr>
          <tr>
            <th>10</th>
            <th>Git Hub</th>
            <th>2 Days</th>
          </tr>
        </table>

        {/*===============================  THIRD COURSE DURATION  ===============================*/}

        <div className="third_course_table">
          <span style={{color: '#fff'}}>BACK-END DEVELOPER</span>
          <span style={{color: '#fff'}}>+</span>
        </div>

        {/*===============================   ===============================*/}


        {/*===============================  THIRD PACKAGE TABLE   ===============================*/}

        <table className="third_package_table">
          <tr>
            <th style={{ color: '#fff', fontSize: '20px' , fontWeight: 'bold' }} >S.No</th>
            <th style={{ color: '#fff', fontSize: '20px' , fontWeight: 'bold' }}>Subject</th>
            <th style={{ color: '#fff', fontSize: '20px' , fontWeight: 'bold' }}>Course Duration</th>
          </tr>
          <tr>
             <th>1</th>
             <th>SQL</th>
             <th>25 DAYS</th>
             
          </tr>
          <tr>
            <th>2</th>
            <th>My SQL</th>
             <th>10 DAYS</th>

          </tr>
          <tr>
            <th>3</th>
            <th>Mongo Db</th>
            <th>15 DAYS</th>
          </tr>
          <tr>
            <th>4</th>
            <th>Node JS</th>
            <th>25 DAYS</th>

          </tr>
          <tr> 
             <th>5</th>
             <th>Express.Js</th>
             <th>4 DAYS</th>
          </tr>
          <tr>
            <th>6</th>
            <th>Git</th>
            <th>2 DAYS</th>
          </tr>
          <tr> 
             <th>7</th>
             <th>Git Hub</th>
             <th>2 DAYS</th>
          </tr>
        </table>

        {/*======================= FOURTH PACKAGE DETAILS =======================*/}

        <div className="fourth_course_table">
          <span style={{color: '#fff'}}>PROGRAMMING LANGUAGE</span>
          <span style={{color: '#fff'}}>+</span>
        </div>


        {/*============================ FOURTH PACKAGE TABLE ============================*/}

        <table className="second_package_table">
          <tr>
            <th style={{ color: '#fff', fontSize: '20px' , fontWeight: 'bold' }} >S.No</th>
            <th style={{ color: '#fff', fontSize: '20px' , fontWeight: 'bold' }}>Course Name</th>
            <th style={{ color: '#fff', fontSize: '20px' , fontWeight: 'bold' }}>Course Duration</th>
          </tr>
          <tr>
             <th>1</th>
             <th>C/C++</th>
              <th>25 DAYS</th>
          </tr>
          <tr>
            <th>2</th>
            <th>Python</th>
            <th>25 DAYS</th>
          </tr>
          <tr>
            <th>3</th>
            <th>JAVA</th>
            <th>25 DAYS</th>
          </tr>
        </table>
      </div>


      {/*=================== POSITION BOXESS ===================*/}


        <Lern GetInTouch={img1} GetInTouch2={img2} />

      {/*================== PICK YOUR COURSE ==================*/}

      <div className="heading_box">
        <p className="heading1">START LEARNING TODAY</p>
        <p className="heading2">Pick Your Course</p>

        {/*===================== FLEX BOX 1 =====================*/}
        <div className="content_box">

          <div className="flex_box1">
            <div className="content">
              <p>STS Education</p>
              <p>Education Panal</p>
              <p> - IN THIS PANAL STUDENT DO HIS EDUCATIONAL ACTIVITY. <br />
                - STUDENT ACCESS ALL OF VEDIO LACTUER AND LIVE CLASSES HELP THIS EDUCATIONAL PANAL. <br />
                -ANY EDUCTIONAL NOTIFICATION STUDENT CAN SEE HERE</p>
            </div>
          </div>
          {/*=========================== FLEX - BOX - 2 ===========================*/}

          <div className="flex_box2">
            <div className="content">
              <p>STS Education</p>
              <p>Vedio Lecture (Visual Learning App)</p>
              <p> - COMPREHENSIVE VEDIO LACTURE <br />
                - BEST VEDIO QUALITY<br />
                - VISUAL LEARNING<br />
                - VEDIO ACCESS ONLY STUDENT USER ID<br />
                - VEDIO ACCESS IN MOBILE , TABLET ,P.C OR LAPTOP.<br />
                - STUDENT SEE VEDIO ANY TIME AND ANY WHERE.</p>
            </div>
          </div>

          {/*======================= FLEX BOX 3 =======================*/}

          <div className="flex_box3">
            <div className="content">
              <p>STS Education</p>
              <p>Live Classes</p>
              <p> LIVE CLASEES WILL ORGANIZED BY STS EDUCATIONAL TEAM. <br />
                - LIVE CLASSE'S MAIN PURPOSE IS IMPROVE STUDENT LEARNING SKILLS AND BUSSINES SKILLS <br />
                - DURING LIVE CLASSES , STUDENT REVISED HIS SLLYABUS AND SOLVE PROBLEMS.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OnlineLearn
