import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.webp'

export default function NavBar() {
  return (
    <>
    <header className='navbar-wrapper mb--xxl'>
      <div className='ly--lg-container'>  
        <nav className='navbar flex justify-content--space-between align-items--center'>
          <Link to={'/'} className='navbar-logo'>
            <img 
              src={logo} 
              alt="Logo Hrnet" />
          </Link>
          <ul className='navbar-links flex'>
            <li>
              <Link to={'/'}>
                Current Employees
              </Link>
            </li>
            <li>
              <Link to={'/create-employee'}>
                Create Employee
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    </>
  )
}
