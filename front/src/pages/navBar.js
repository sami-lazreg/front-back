import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'

const NavBar = () => {
    const auth=useSelector(state=>state.authReducer)
    return (
        
        <div>
            {!auth.role?
            <div>
            <Link to="/">Home</Link>
            <Link to="/Login">connection</Link>
            <Link to="/Products">Products</Link>
            </div>
            :
            <div>
            <Link to="/Login">déconnection</Link> 
            </div>}
            
        </div>
    )
}

export default NavBar
