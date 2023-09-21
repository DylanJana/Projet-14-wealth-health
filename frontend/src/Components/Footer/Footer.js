import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import logoWhite from '../../assets/img/logo-white.webp'

export default function Footer() {
  const [activeNavItem, setActivateNavItem] = useState('board')
  const handleNavItemClick = (navItem) => {
    setActivateNavItem(navItem)
  }
  return (
    <footer>
      <div className="ly--lg-container">
        <div className="footer-wrapper flex justify-content--space-between align-items--center">
          <Link to={'/'} className='footer-logo'>
            <img
              src={logoWhite}
              alt="Logo Hrnet"
              width="80"
              height="80"
              loading="lazy" />
          </Link>
          <ul className='footer-links flex'>
            <li>
              <Link
                to={'/'}
                className={activeNavItem === 'board' ? 'active--underline' : ''}
                onClick={() => handleNavItemClick('board')}>
                Current Employees
              </Link>
            </li>
            <li>
              <Link
                to={'/create-employee'}
                className={activeNavItem === 'form' ? 'active--underline' : ''}
                onClick={() => handleNavItemClick('form')}>
                Create Employee
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
