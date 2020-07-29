import React from 'react'
import { Link } from 'react-router-dom'
import ErrorImage from '../assets/404.gif'

function Error404() {

    const errorStyle = {
        height: '100vh',
        width: '100vw',
        padding: 0,
        marging: 0,
    }

    return (
        < div className="error404" >
            <Link style={{ fontSize: '2rem' }} to='/'><img style={errorStyle} src={ErrorImage} alt="" /></Link>
        </div >
    )
}

export default Error404
