import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  const navLinkClass = ({ isActive }) => {
    const classes = ['nav-bar__link']
    if (isActive) classes.push('nav-bar__link--active')
    return classes.join(' ')
  }
  return (
    <nav className='nav-bar'>
      <div className='nav-bar__logo'>
        <img src='/path-to-your-icon.png' alt='Icono de la página' className='nav-bar__icon' /> 
        <span className='nav-bar__title'>Caturros DIU</span>
      </div>

      <div className='nav-bar__links'>
        <NavLink className={navLinkClass} to='/feria'>
          31 Feria
        </NavLink>
        <NavLink className={navLinkClass} to='/historia'>
          Historia
        </NavLink>
        <NavLink className={navLinkClass} to='/versiones-anteriores'>
          Versiones Anteriores
        </NavLink>
      </div>
    </nav>
  )
}
 
export default NavBar
