import React from 'react'
import './FlexBoxCard.css'
import courses from '../img/Home-img/courses.jpg'

const FlexBoxCard = (name) => {
    return (
        <>
            <div className="flex-box-card">
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
        </>
    )
}

export default FlexBoxCard
