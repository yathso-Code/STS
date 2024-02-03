import React, { useState } from 'react'
import './Home.css'
import office from './img/Home-img/office.png'
import courses from './img/Home-img/courses.jpg'
import GetInTouch from './img/Home-img/GetInTouch.jpg'
import GetInTouch2 from './img/Home-img/GetInTouch2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faUserGraduate, faPersonChalkboard, faClock } from '@fortawesome/free-solid-svg-icons'
import CountUp from 'react-countup'

const Home = () => {
    
    const [counterOn, setCounterOn] = useState(false);
    
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
                        <button>Our Course</button>
                        <button>Learn More</button>
                    </div>
                </div>
            </div>

            {/* ================== Into - Ends ================== */}

            {/*============ Best - Courses - Starts ============*/}

            <div className="Best-course">
                <p>START LEARNING TODAY</p>
                <p>Our best online Courses</p>
                <div className="course-list">
                    <a href="www.office.com">
                        <img src={office} alt="office" />
                        <span className="name">Microsoft</span>
                        <span className="days">45 Days</span>
                    </a>
                    <a href="www.office.com">
                        <img src={office} alt="office" />
                        <span className="name">Microsoft</span>
                        <span className="days">45 Days</span>
                    </a>
                    <a href="www.office.com">
                        <img src={office} alt="office" />
                        <span className="name">Microsoft</span>
                        <span className="days">45 Days</span>
                    </a>
                    <a href="www.office.com">
                        <img src={office} alt="office" />
                        <span className="name">Microsoft</span>
                        <span className="days">45 Days</span>
                    </a>
                    <a href="www.office.com">
                        <img src={office} alt="office" />
                        <span className="name">Microsoft</span>
                        <span className="days">45 Days</span>
                    </a>
                    <a href="www.office.com">
                        <img src={office} alt="office" />
                        <span className="name">Microsoft</span>
                        <span className="days">45 Days</span>
                    </a>
                </div>
                <button>More Courses</button>
            </div>

            {/*============= Best - Courses - Ends =============*/}

            {/*============ Pick - Courses - Starts ============*/}

            <div className="container flex-coloumn">
                <p>START LEARNING TODAY</p>
                <p>Pick Your Course Today</p>


                <div className="flex-box-one flex">
                    <div className="box">
                        <div className="image">
                            <img src={courses} alt='' />
                            <span>1st Package</span>
                        </div>
                        <div className="info">
                            Course in 999/- ₹ Only<br />
                            <p>EACH COURSE <span>FOR 45 DAYS</span></p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="image">
                            <img src={courses} alt='' />
                            <span>2nd Package</span>
                        </div>
                        <div className="info">
                            Course in 1999/- ₹ Only<br />
                            <p>EACH COURSE <span>FOR 3 MONTHS</span></p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="image">
                            <img src={courses} alt='' />
                            <span>3rd Package</span>
                        </div>
                        <div className="info">
                            Course in 2999/- ₹ Only<br />
                            <p>EACH COURSE <span>FOR 6 MONTHS</span></p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="image">
                            <img src={courses} alt='' />
                            <span>1st Package</span>
                        </div>
                        <div className="info">
                            Course in 999/- ₹ Only<br />
                            <p>EACH COURSE <span>FOR 45 DAYS</span></p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="image">
                            <img src={courses} alt='' />
                            <span>2nd Package</span>
                        </div>
                        <div className="info">
                            Course in 1999/- ₹ Only<br />
                            <p>EACH COURSE <span>FOR 3 MONTHS</span></p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="image">
                            <img src={courses} alt='' />
                            <span>3rd Package</span>
                        </div>
                        <div className="info">
                            Course in 2999/- ₹ Only<br />
                            <p>EACH COURSE <span>FOR 6 MONTHS</span></p>
                        </div>
                    </div>
                </div>
            </div>


            {/*============= Pick - Courses - Ends =============*/}

            {/*=============== Counters - Start ===============*/}


                <div className="Counters flex">
                    <div className="overlay flex"></div>
                    <div className="countUp one">
                        <FontAwesomeIcon icon={faGraduationCap} />
                        <p>
                            <span><CountUp start={0} end={50} duration={2} delay={0} /></span><br />
                            ONLINE COURSES
                        </p>
                    </div>
                    <div className="countUp two">
                        <FontAwesomeIcon icon={faUserGraduate} />
                        <p>
                            <span><CountUp start={0} end={4500} duration={2} delay={0} /></span><br />
                            STUDENTS ENROLLED
                        </p>
                    </div>
                    <div className="countUp three">
                        <FontAwesomeIcon icon={faPersonChalkboard} />
                        <p>
                            <span><CountUp start={0} end={1200} duration={2} delay={0} /></span><br />
                            EXPERT INSTRUCTORS
                        </p>
                    </div>
                    <div className="countUp four">
                        <FontAwesomeIcon icon={faClock} />
                        <p>
                            <span><CountUp start={0} end={300} duration={2} delay={0} /></span><br />
                            CLASSES HOURS
                        </p>
                    </div>
                </div>
                
                {/*================ Counters - Ends ================*/}
                
                {/*============ Slide - Contact - Starts ============*/}
                
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
                
                {/*============= Get - In - Touch - Ends =============*/}
                
                {/*=============== Enroll - Starts ===============*/}
                
                <div className="Enroll-Section">
                <div className="center">
                <div className="overlay"></div>
                <p>WE ARE STS EDUCATION AN ONLINE LEARNING CENTER</p>
                <p>STS Education is one of the online learning platfom in all
                over India which provides online learning with 100% Job support
                assitance.
                </p>
                <button>Enroll Now</button>
                </div>
            </div>
            
            {/*================ Enroll - Ends ================*/}
            </>
            )
        }
        
        export default Home
        