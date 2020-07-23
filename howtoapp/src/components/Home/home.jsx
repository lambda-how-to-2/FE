import React from 'react'
import './home_style.css'
import Navigation from '../navigation/LoggedInNav'

function home() {
    return (
        <div className="home">
            {/* Temp Nav untill we add react router  */}
            <Navigation />
            <div className="btn-container">
                <div className="wrapper">
                    <h1>What would you like to do?</h1>
                    <div className="btn_wrapper">
                        <div className="discover_btn">
                            <div className="icon">
                                <h2>Discover</h2>
                            </div>
                        </div>
                        <div className="create_btn">
                            <div className="icon2">
                                <h2>Create</h2>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default home