import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/img/logo.webp'
import { useState } from 'react'

export default function NavBar() {
  const [activeNavItem, setActivateNavItem] = useState('bord')
  const handleNavItemClick = (navItem) => {
    setActivateNavItem(navItem)
  }
  return (
    <>
      <header className='navbar-wrapper mb--xxl'>
        <div className='ly--lg-container'>
          <nav className='navbar flex justify-content--space-between align-items--center'>
            <Link to={'/'} className='navbar-logo'>
              <img
                src={logo}
                width="80"
                height="80"
                loading="lazy"
                alt="Logo Hrnet" />
            </Link>
            <ul className='navbar-links flex'>
              <li>
                <NavLink
                  to={'/'}
                  className={activeNavItem === 'board' ? 'active' : ''}
                  onClick={() => handleNavItemClick('board')}
                >
                  Current Employees
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={'/create-employee'}
                  className={activeNavItem === 'form' ? 'active' : ''}
                  onClick={() => handleNavItemClick('form')}
                >
                  Create Employee
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}
