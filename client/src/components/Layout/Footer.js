import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{
       color: 'white',
       padding: '25px',
       background: 'linear-gradient(90deg, rgba(2,0,36,1) 29%, rgba(190,112,112,1) 59%)'
    }} className='footer'>
      <h4 className='text-center'>All Right Reserved</h4>
      <p className='text-center mt-3'>
      <Link to='/about'> About</Link>
      |
      <Link to='/contact'> Contact</Link>
      |
      <Link to='/policy'> Privacy Policy</Link>

      </p>
    </div>
  )
}

export default Footer
