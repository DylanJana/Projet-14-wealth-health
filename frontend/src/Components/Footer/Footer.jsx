import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import logoWhite from '../../assets/img/logo-white.webp'

export default function Footer() {
  return (
    <footer>
      <div className="ly--lg-container">
        <div className="footer-wrapper flex justify-content--space-between align-items--center">
          <Link to={'/'} className='footer-logo'>
            <img 
              src={logoWhite} 
              alt="Logo Hrnet" />
          </Link>
          <ul className='footer-links flex'>
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
        </div>
      </div>
    </footer>
  )
}
