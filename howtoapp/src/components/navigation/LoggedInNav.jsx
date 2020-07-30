import React from "react"
import "./navigation.style.css"
import { Link, NavLink, useLocation } from "react-router-dom"

function LoggedInNav() {
  const location = useLocation()

  const SearchBoxVisible = () => {
    return location.pathname === "/howtos" ? (
      <div className='searchBox'>
        <input type='text' id='searchField' placeholder='Seach' />
        <button className='searchBtn'>
          <i className='fa fa-search'></i>
        </button>
      </div>
    ) : (
      ""
    )
  }

  return (
    <>
      <div className='nav-wrapper'>
        <nav>
          <Link className='nav-logo-loggedIn' to='/'>
            HOW2
          </Link>
          <SearchBoxVisible />
          <div className='menu'>
            <NavLink
              to='/howtos'
              className='menu-links'
              activeClassName='active'
            >
              Explore
            </NavLink>
            <NavLink
              to='/profile'
              className='menu-links'
              activeClassName='active'
            >
              Profile
            </NavLink>
            <NavLink
              to='/logout'
              className='menu-links'
              activeClassName='active'
            >
              Logout
            </NavLink>
          </div>
        </nav>
      </div>
    </>
  )
}

export default LoggedInNav
