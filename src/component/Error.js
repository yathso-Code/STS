import { render } from '@testing-library/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  
  return (
    <>
      <Link to="/"  style={{position: 'absolute', top: '50%', left: '50%',
           transform: 'translate(-50%, -50%)', color: 'white', fontSize: '40px', fontWeight: 'bold'}}
      > Try again </Link>
      <img src='https://images.unsplash.com/photo-1623018035782-b269248df916?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXJyb3J8ZW58MHx8MHx8fDA%3D'
      style={{width: '100vw', height: '100vh'}} alt=''/>
    </>
  )
}

export default Error
