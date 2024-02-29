import React, { useRef } from 'react'
import './Nav.css'

const Nav = () => {

  const movePage = useRef();

  return (
    <nav>
      <a className='logo'>
        <img alt='Diseny Plus Logo' src={require('../../public/images/cta-logo-one.png')} onClick={() => movePage('/')} />
      </a>
    </nav>
  )
}

export default Nav
