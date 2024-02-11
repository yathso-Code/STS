import React from 'react'
import './FlexBoxCard.css'
import courses from '../img/Home-img/courses.jpg'

const FlexBoxCard = ({num}) => {
    let arr =[2,3,3,4,4,4,5,6];

    return (
        <>
            <div className="flex-box-card">
                {
                    arr.slice(0,num).map((item)=>(
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
                    ))
                }
               
               
               
            </div>
        </>
    )
}

export default FlexBoxCard
