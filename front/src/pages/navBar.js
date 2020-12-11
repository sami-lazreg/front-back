import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'

const NavBar = () => {
    const auth=useSelector(state=>state.authReducer)
    return (
        
        <div>
            <Link to="/">Home</Link>
            <Link to="/Login">connection</Link>
            <Link to="/phone">phone</Link>
            <Link to="/pc">pc</Link>
            <Link to="/electromenager">electromenager</Link>

           
            
        </div>
    )
}

export default NavBar
