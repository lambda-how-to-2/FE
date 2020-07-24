import React from 'react'
import './navigation.style.css'
import { Link } from 'react-router-dom'



function Navigation() {
    return (
        <>
            <div className="nav-wrapper">
                <nav>
                    <Link className="nav-logo-loggedIn" to="/">HOW2</Link>
                    <div className="menu">
                        <Link to="/features">Features</Link>
                        <Link to="/team">Team</Link>
                        <Link to="/Login">login</Link>
                        <Link to="signup">Sign Up</Link>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navigation
