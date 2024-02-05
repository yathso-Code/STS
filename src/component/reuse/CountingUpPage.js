import React from 'react'
import './CountingUpPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faUserGraduate, faPersonChalkboard, faClock } from '@fortawesome/free-solid-svg-icons'
import CountUp from 'react-countup'

const CountingUpPage = () => {
  return (
    <>
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
    </>
  )
}

export default CountingUpPage
