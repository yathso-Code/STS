import React from 'react'
import './Home.css'
import office from './img/Home-img/office.png'
import Lern from './reuse/Lern'
import GetInTouch from './img/Home-img/GetInTouch.jpg'
import GetInTouch2 from './img/Home-img/GetInTouch2.jpg'
import FlexBoxCard from './reuse/FlexBoxCard'
import CounterUp from './reuse/CountingUpPage'
import EnrollPage from './reuse/EnrollPage'
import  {useContext} from 'react'
import {Api} from '../App';
import { Link } from 'react-router-dom'

const Home = () => {
    let a = useContext(Api);
    console.log(a.startLearn);
    let arr = a.startLearn;
    // let arr =[3,4,5,5,5,6]

    window.addEventListener('scroll', () => {
        const Body = document.body;
        let Scrolled = window.scrollY;
        // console.log(nav);
        if (Scrolled >= 1000) {
            Body.classList.add('body-change');
            // console.log(Scrolled);
        } else {
            Body.classList.remove('body-change');
        }
    });


    return (
        <>
            {/*================= Into - Starts =================*/}

            <div className="Intro">
                <div className="Welcome">
                    <p>WELCOME TO STS EDUCATION</p>
                    <p className="sf">Online Learning with Big Earning</p>
                    <p>STS Education is a best online learning and Earning platform</p>
                    <div className="btn">
                        <button><Link to='/course'>Our Course</Link>   </button>
                        <button><Link to='/about'>Learn More</Link></button>
                    </div>
                </div>
                <div className='login_box'>
                          <form>
                            <h3>Login Here</h3>
        
                                <label htmlFor="username">Username</label>
                                <input type="text" placeholder="Email or Phone" id="username" />
        
                                 <label htmlFor="password">Password</label>
                                 <input type="password" placeholder="Password" id="password" />
        
                                 <button>Log In</button>
                                
                          </form>
        
                </div>
            </div>

            {/* ================== Into - Ends ================== */}

            {/*============ Best - Courses - Starts ============*/}

            <div className="Best-course">
                <p>START LEARNING TODAY</p>
                <p>Our best online Courses</p>
                <div className="course-list">

                 {arr.map((item)=>(
                     <div className='best_course_card_box'>
                      <a href="www.office.com">
                      <img src={item.img} alt="office" />
                       <span className="name">{item.name}</span>
                       <span className="days">{item.Day}</span>
                      </a>
                     </div>
                 )) }

                </div>
                
            </div>

            {/*============= Best - Courses - Ends =============*/}

            {/*============ Pick - Courses - Starts ============*/}

            <div className="container flex-coloumn">
                <p>START LEARNING TODAY</p>
                <p>Pick Your Course Today</p>
            </div>

            {/*================= FLEX-BOX-CARD =================*/}
            <div className="Cards">
                <FlexBoxCard num={4}/>
                
            </div>
            {/*================= FLEX-BOX-CARD =================*/}


            {/*============= Pick - Courses - Ends =============*/}

            <CounterUp />

            {/*============ Slide - Contact - Starts ============*/}

            <Lern GetInTouch={GetInTouch} GetInTouch2={GetInTouch2} />
            {/*============= Get - In - Touch - Ends =============*/}


            {/*============= Enroll - Page =============*/}

            <EnrollPage InfoTitle={'WE ARE STS EDUCATION AN ONLINE LEARNING CENTER'} Information={'STS Education is one of the online learning platfom in all over India which provides online learning with 100% Job support assitance.'} BUTTON={<button>Enroll Now</button>} />

            {/*============= Enroll - Page =============*/}

        </>
    )
}

export default Home
