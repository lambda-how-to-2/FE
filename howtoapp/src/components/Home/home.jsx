import React from 'react'
import './home_style.css'
import { Link } from 'react-router-dom'


function home() {
  return (
    <div className="home">
      <div className="btn-container">
        <div className="wrapper">
          <h1 className="home-title">What would you like to do?</h1>
          <div className="btn_wrapper">
            <div className="discover_btn">
              <div className="icon-discover">
                <Link to='/howtos'><h2>Discover</h2></Link>

              </div>
            </div>
            <div className="create_btn">
              <div className="icon-create">
                <Link to="/profile"><h2>Create</h2></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default home
