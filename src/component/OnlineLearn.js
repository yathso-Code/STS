import React from 'react'
import './OnlineLearn.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faCreditCard, faStore, faCashRegister } from '@fortawesome/free-solid-svg-icons';

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
            <img src="https://www.pngitem.com/pimgs/m/35-357850_business-man-working-man-working-on-computer-clipart.png" width="35%" height="25%" alt='' />
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
          <span>Second Package Course in 999/- rupess</span>
          <span>+</span>
        </div>

        {/*===============================   SECOND PACKAGE TABLE  ===============================*/}

        <table className="second_package_table">
          <tr>
            <td style={{ color: 'black', fontWeight: 'bold' }} >S.No</td>
            <td style={{ color: 'black', fontWeight: 'bold' }}>Course Name</td>
            <td style={{ color: 'black', fontWeight: 'bold' }}>Course Duration</td>
            <td style={{ color: 'black', fontWeight: 'bold' }}>Fees</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Certificate In Microsoft Office</td>
            <td>45 Days</td>
            <td>999/-Rs</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Certificate In Excel</td>
            <td>45 Days</td>
            <td>999/-Rs</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Certificate In Tally ERP 9</td>
            <td>45 Days</td>
            <td>999/-Rs</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Certificate In GST</td>
            <td>45 Days</td>
            <td>999/-Rs</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Certificate In DTP</td>
            <td>45 Days</td>
            <td>999/-Rs</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Certificate In Photoshop</td>
            <td>45 Days</td>
            <td>999/-Rs</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Certificate In Corel Draw</td>
            <td>45 Days</td>
            <td>999/-Rs</td>
          </tr>
          <tr>
            <td>8</td>
            <td>Certificate In C Language</td>
            <td>45 Days</td>
            <td>999/-Rs</td>
          </tr>
          <tr>
            <td>9</td>
            <td>Certificate In C++ Language</td>
            <td>45 Days</td>
            <td>999/-Rs</td>
          </tr>
          <tr>
            <td>10</td>
            <td>Certificate In JAVA</td>
            <td>45 Days</td>
            <td>999/-Rs</td>
          </tr>
          <tr>
            <td>11</td>
            <td>Certificate In PHP</td>
            <td>45 Days</td>
            <td>999/-Rs</td>
          </tr>
          <tr>
            <td>12</td>
            <td>Certificate In HTML</td>
            <td>45 Days</td>
            <td>999/-Rs</td>
          </tr>
          <tr>
            <td>13</td>
            <td>Certificate In CSS</td>
            <td>45 Days</td>
            <td>999/-Rs</td>
          </tr>
          <tr>
            <td>14</td>
            <td>Certificate In WORDPRESS</td>
            <td>45 Days</td>
            <td>999/-Rs</td>
          </tr>
          <tr>
            <td>15</td>
            <td>Certificate In Autocad</td>
            <td>45 Days</td>
            <td>999/-Rs</td>
          </tr>
          <tr>
            <td>16</td>
            <td>BASIC KNOWLEDGE IN COMPUTER</td>
            <td>45 Days</td>
            <td>999/-Rs</td>
          </tr>
          <tr>
            <td>17</td>
            <td>Spoken English</td>
            <td>45 Days</td>
            <td>999/-Rs</td>
          </tr>
        </table>

        {/*===============================  THIRD COURSE DURATION  ===============================*/}

        <div className="third_course_table">
          <span>Third Package Course in 1999/- rupess</span>
          <span>+</span>
        </div>

        {/*===============================   ===============================*/}


        {/*===============================  THIRD PACKAGE TABLE   ===============================*/}

        <table className="third_package_table">
          <tr>
            <td style={{ color: 'black', fontWeight: 'bold' }} >S.No</td>
            <td style={{ color: 'black', fontWeight: 'bold' }}>Course Name</td>
            <td style={{ color: 'black', fontWeight: 'bold' }}>Course Duration</td>
            <td style={{ color: 'black', fontWeight: 'bold' }}>Fees</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Diploma In Computer Application (DCA)</td>
            <td>6 Month</td>
            <td>1999/-Rs</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Diploma In Tally</td>
            <td>6 Month</td>
            <td>1999/-Rs</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Diploma In Computer Accounting & GST</td>
            <td>6 Month</td>
            <td>1999/-Rs</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Diploma In Graphic Designing</td>
            <td>6 Month</td>
            <td>1999/-Rs</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Certificate In Computer Basic</td>
            <td>3 Months</td>
            <td>1999/-Rs</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Certificate In Microsoft office</td>
            <td>3 Months</td>
            <td>1999/-Rs</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Certificate In Autocad Training</td>
            <td>3 Months</td>
            <td>1999/-Rs</td>
          </tr>
          <tr>
            <td>8</td>
            <td>Certificate In C++ & Java</td>
            <td>3 Months</td>
            <td>1999/-Rs</td>
          </tr>
          <tr>
            <td>9</td>
            <td>Certificate In Core Java</td>
            <td>3 Months</td>
            <td>1999/-Rs</td>
          </tr>
          <tr>
            <td>10</td>
            <td>Certificate In Web Designing</td>
            <td>3 Months</td>
            <td>1999/-Rs</td>
          </tr>
          <tr>
            <td>11</td>
            <td>Certificate In PYTHON</td>
            <td>3 Months</td>
            <td>1999/-Rs</td>
          </tr>
          <tr>
            <td>12</td>
            <td>Certificate In HTML & CSSL</td>
            <td>3 Months</td>
            <td>1999/-Rs</td>
          </tr>
          <tr>
            <td>13</td>
            <td>Brain Tranning Course :- This couse is Conduct by Guinness World Record holder, international awarded and renowned as Brain S cience Expert Dr. Vinod Sharma</td>
            <td>3 Months</td>
            <td>1999/-Rs</td>
          </tr>
        </table>

        {/*======================= FOURTH PACKAGE DETAILS =======================*/}

        <div className="fourth_course_table">
          <span>Fourth Package Course in 9999/- rupess</span>
          <span>+</span>
        </div>


        {/*============================ FOURTH PACKAGE TABLE ============================*/}

        <table className="second_package_table">
          <tr>
            <td style={{ color: 'black', fontWeight: 'bold' }} >S.No</td>
            <td style={{ color: 'black', fontWeight: 'bold' }}>Course Name</td>
            <td style={{ color: 'black', fontWeight: 'bold' }}>Course Duration</td>
            <td style={{ color: 'black', fontWeight: 'bold' }}>Fees</td>
          </tr>
          <tr>
            <td>1</td>
            <td>(ADCA) Advance Diploma In Computer Application</td>
            <td>1 Year</td>
            <td>2999/-Rs</td>
          </tr>
          <tr>
            <td>2</td>
            <td>(ADCAP) Advance Diploma In Computer Application & Programming</td>
            <td>1 Year</td>
            <td>2999/-Rs</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Advance Diploma In Compute Opretor</td>
            <td>1 Year</td>
            <td>2999/-Rs</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Junior Computer Engineer</td>
            <td>1 Year</td>
            <td>2999/-Rs</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Diploma In Web Designing</td>
            <td>6 Months</td>
            <td>2999/-Rs</td>
          </tr>
          <tr>
            <td>6</td>
            <td>BCA Education</td>
            <td>1 Year (2 sems)</td>
            <td>2999/-Rs</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Brain Tranning Course :- This couse is Conduct by Guinness World Record holder, international awarded and renowned as Brain Science Expert Dr. Vinod Sharma</td>
            <td>6 Months</td>
            <td>2999/-Rs</td>
          </tr>
        </table>
      </div>


      {/*=================== POSITION BOXESS ===================*/}


      <div className="position_hidden_box">
        <div className="image_box1">
          <img src="https://cdn.create.vista.com/api/media/small/379202590/stock-photo-cropped-view-woman-using-laptop-cup-tea-beige-surface" alt='' />
        </div>
        <div className="image_box2">
          <img src="https://images.pexels.com/photos/1326947/pexels-photo-1326947.jpeg?cs=srgb&dl=pexels-george-dolgikh-1326947.jpg&fm=jpg" alt='' />
        </div>


        {/*====================== POSITION HIDDEN BOXES ======================*/}

        <div className="position_hidden_box_text">
          <p>ONLINE LEARNING PROGRAMME ENHANCED YOUR SKILLS</p>
          <h2>In this course we provide students</h2>
          <ul>
            <li>Education Panel</li>
            <li>Vedio Lecture Classes (Visual learning App)</li>
            <li>Live Class</li>
            <li>Study Metrials</li>
            <li>Books</li>
            <li>Practic Test</li>
            <li>Final Exam</li>
            <li>Certificate</li>
            <li>Business Panal / Job panal</li>
          </ul>
          <button>Get in touch with us</button>
        </div>
      </div>


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
