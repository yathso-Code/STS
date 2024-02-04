import React from 'react'
import './Home.css'
import office from './img/Home-img/office.png'
import Lern from './reuse/Lern'
import GetInTouch from './img/Home-img/GetInTouch.jpg'
import GetInTouch2 from './img/Home-img/GetInTouch2.jpg'
import FlexBoxCard from './reuse/FlexBoxCard'
import CounterUp from './reuse/CountingUpPage'
import EnrollPage from './reuse/EnrollPage'

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

            <CounterUp />

            {/*============ Slide - Contact - Starts ============*/}

            <Lern GetInTouch={GetInTouch} GetInTouch2={GetInTouch2} />
            {/*============= Get - In - Touch - Ends =============*/}
            
            
            {/*============= Enroll - Page =============*/}

            <EnrollPage />

            {/*============= Enroll - Page =============*/}

        </>
    )
}

export default Home
