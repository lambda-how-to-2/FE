import React from 'react'
import './navigation.style.css'
import { Link, useLocation } from 'react-router-dom'


function LoggedInNav() {

    const location = useLocation()

    const SearchBoxVisible = () => {
        return location.pathname === '/profile' ?
            <div className="searchBox">
                <inp ut type="text" id="searchField" placeholder="Seach" />
                <button className='searchBtn'><i class="fa fa-search"></i></button>
            </div>
            : ''
    }



    return (
        <>
            <div className="nav-wrapper">
                <nav>
                    <Link className="nav-logo-loggedIn" to="/">HOW2</Link>
                    <SearchBoxVisible />
                    <div className="menu">
                        <Link to="/explore">Explore</Link>
                        <Link to="/profile">Profile</Link>
                        <Link to="/logout">Logout</Link>
                    </div>
                </nav>
            </div>

        </>
    )
}

export default LoggedInNav
