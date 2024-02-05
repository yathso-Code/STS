import React from 'react'
import './EnrollPage.css'

const EnrollPage = ({InfoTitle, Information, BUTTON}) => {
  return (
    <>
                  {/*=============== Enroll - Starts ===============*/}

                  <div className="Enroll-Section">
                  <div className="center">
                      <div className="overlay"></div>
                      <p>{InfoTitle}</p>
                      <p>{Information}
                      </p>
                      <div className="btn">{BUTTON}</div>
                  </div>
              </div>
  
              {/*================ Enroll - Ends ================*/}
    </>
  )
}

export default EnrollPage
