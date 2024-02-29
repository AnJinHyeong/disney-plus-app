import React, { useEffect, useState } from 'react'
import './Nav.css'
import { useNavigate } from 'react-router-dom'

const Nav = () => {

  const [show, setShow] = useState(false)
  const navigation = useNavigate("");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 50){
        setShow(true)
      } else {
        setShow(false)
      }
      return () => {
        window.removeEventListener("scroll", () => {})
      }
    })
  })


  return (
    <nav style={{backgroundColor : show ? '#090b13' : 'transparent'}}>
      <a className='logo' onClick={() => navigation("/")}>
        <img alt='Disney Plus Logo' src='/images/logo.svg' onClick={() => navigation("/")}/>
      </a>
    </nav>
  )
}

export default Nav
