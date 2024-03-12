import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{
       color: 'white',
       padding: '25px',
       background: 'rgb(0,0,0)',
      background: 'radial-gradient(circle, rgba(0,0,0,1) 1%, rgba(0,0,0,1) 59%)',

    }} className='footer'>
      <h4 className='text-center'>All Right Reserved</h4>
      <p className='text-center mt-3'>
      <div style={{ color: 'white' }}>
  <Link to='/about' style={{ color: 'white', textDecoration: 'none' }}>About</Link> |
  <Link to='/contact' style={{ color: 'white', textDecoration: 'none' }}>Contact</Link> |
  <Link to='/policy' style={{ color: 'white', textDecoration: 'none' }}>Privacy Policy</Link>
</div>
      </p>
    </div>
  )
}

export default Footer
