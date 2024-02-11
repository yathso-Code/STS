import React from 'react'
import './Course.css'
import FlexBoxCard from './reuse/FlexBoxCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const Course = () => {
  return (
    <>
      {/*====================================== herobanner start ========================= */}
      <div class="hero_banner">
        <div class="hero_banner_txt">
          <h1 class="hero1">HOME <span> <FontAwesomeIcon icon={faAngleRight} /> </span>
            Course <span> <FontAwesomeIcon icon={faAngleRight} /> </span>
          </h1><br />
          <h1 class="hero2">Course</h1>
        </div>
      </div>

      {/* ========================= Learning Section ========================= */}

      <div className="Course-section">
        <div class="Learning">
          <p>START LEARNING TODAY</p>
        </div>
        <div class="Course">
          <h1><span>Let's See</span>
            <span>Our Course</span></h1>
        </div>
      </div>

      {/* =  FLEX - BOX - CARD  = */}
<div className="Cards">
      <FlexBoxCard num={8}/>
      </div>


      {/* =  FLEX - BOX - CARD  = */}


      {/* ========================= Course - Card - Section ========================= */}

    </>
  )
}

export default Course
