import React from 'react'
import './navigation.style.css'
// import { Link } from 'react-router-dom'

// We will use this Header for non logged in users

function Navigation() {
    return (
        <>
            <div className="nav-wrapper">
                <nav>
                    <h1 className="nav-logo">HOW2</h1>
                    <div className="menu">
                        <a href="/explorer">Features</a>
                        <a href="/explorer">Team</a>
                        <a href="/register">Sign Up</a>
                        <a href="/login">Login</a>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navigation
