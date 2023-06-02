import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.webp'

export default function NavBar() {
  return (
    <>
    <header className='ly--lg-container'>
      <nav>
        <Link to={'/'}>
          <img 
            src={logo} 
            alt="Logo Hrnet" />
        </Link>
        <ul>
          <li>
            <Link to={'/create-employee'}></Link>
            Create Employee
          </li>
          <li>
            Current Employees
          </li>
        </ul>
      </nav>
    </header>
    </>
  )
}
