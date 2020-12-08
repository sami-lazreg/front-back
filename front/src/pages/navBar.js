import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <Link to="/">Go Home</Link>
            <Link to="/Login">Login</Link>
            <Link to="/Register">Register</Link>
            
        </div>
    )
}

export default NavBar
