import React from 'react'
import './Home.css'
import office from './img/Home-img/office.png'
import Lern from './reuse/Lern'
import GetInTouch from './img/Home-img/GetInTouch.jpg'
import GetInTouch2 from './img/Home-img/GetInTouch2.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faUserGraduate, faPersonChalkboard, faClock } from '@fortawesome/free-solid-svg-icons'
import CountUp from 'react-countup'
import FlexBoxCard from './reuse/FlexBoxCard'

const Home = () => {

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
            </div>

            {/*================= FLEX-BOX-CARD =================*/}
            <div className="Cards">
                <FlexBoxCard />
                <FlexBoxCard />
            </div>
            {/*================= FLEX-BOX-CARD =================*/}


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

            <Lern GetInTouch={GetInTouch} GetInTouch2={GetInTouch2} />
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
