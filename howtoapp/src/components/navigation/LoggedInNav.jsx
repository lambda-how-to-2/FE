import React from 'react'

import './navigation.style.css'

function LoggedInNav() {
    return (
        <>
            <div className="nav-wrapper">
                <nav>
                    <h1 className="nav-logo-loggedIn">HOW2</h1>
                    <div className="searchBox">
                        <input type="text" id="search" placeholder="Seach" />
                        <button className='searchBtn'><i class="fa fa-search"></i></button>
                    </div>
                    <div className="menu">
                        <a href="/explorer">Explore</a>
                        <a href="/explorer">Profile</a>
                        <a href="/explorer">Logout</a>
                    </div>
                </nav>
            </div>
            {/* <hr className="hr-loggedIn" /> */}
        </>
    )
}

export default LoggedInNav
