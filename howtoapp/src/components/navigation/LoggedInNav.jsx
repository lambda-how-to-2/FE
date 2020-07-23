import React from 'react'
import './navigation.style.css'



function LoggedInNav({ searchBox }) {


    const SearchBoxVisible = () => {
        return searchBox ?
            <div className="searchBox">
                <input type="text" id="search" placeholder="Seach" />
                <button className='searchBtn'><i class="fa fa-search"></i></button>
            </div>
            : ''
    }



    return (
        <>
            <div className="nav-wrapper">
                <nav>
                    <h1 className="nav-logo-loggedIn">HOW2</h1>
                    <SearchBoxVisible />
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
