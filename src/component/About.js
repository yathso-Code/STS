import React from 'react'
import './About.css'
import Lern from './reuse/Lern'
import CountingUpPage from './reuse/CountingUpPage'
import GetInTouch from './img/Home-img/GetInTouch.jpg'
import GetInTouch2 from './img/Home-img/GetInTouch2.jpg'
import EnrollPage from './reuse/EnrollPage'

const About = () => {
  return (
    <>
    <Lern GetInTouch={GetInTouch} GetInTouch2={GetInTouch2} />
    <CountingUpPage />
    <EnrollPage />
    </>
  )
}

export default About
