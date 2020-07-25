import React from 'react'
import './navigation.style.css'
import { NavLink, Link } from 'react-router-dom'



function Navigation() {
    return (
        <>
            <div className="nav-wrapper">
                <nav>
                    <Link className="nav-logo-loggedIn" to="/">HOW2</Link>
                    <div className="menu">
                        <NavLink exact to="/features" className="menu-links" activeClassName="active">
                            Features</NavLink>
                        <NavLink exact to="/team" className="menu-links" activeClassName="active">
                            Team</NavLink>
                        <NavLink exact to="/Login" className="menu-links" activeClassName="active">
                            Login</NavLink>
                        <NavLink exact to="signup" ex className="menu-links" activeClassName="active">
                            Sign Up</NavLink>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navigation
