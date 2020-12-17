import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import NavbarProduct from './products/navBarProduct'
import {useLocation} from 'react-router-dom'
import { DECONECT } from '../actions/types'


const NavBar = () => {
const dispatch=useDispatch()
const deconnection=()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    dispatch({type:DECONECT})
}
    const location=useLocation()
    console.log(location)
    const auth = useSelector(state => state.authReducer)
    return (

        <div >
            {!auth.role ?

                <div className="nav-bar container"> 
                    <ul>
                        <li><Link style={{textDecoration:"none",color:"black"}} to="/">Home</Link></li>
                       
                    </ul>
                        <NavbarProduct/>
                    <ul style={{paddingLeft:800,display:"flex"}}>
                        <li><Link style={{textDecoration:"none",color:"black",paddingRight:20}} to="/Login">connection</Link></li>
                        <li><Link to='/panier' style={{textDecoration:"none",color:"black",paddingRight:40}} to="/panier">panier</Link></li>
                        {/* <li><i class="fa fa-facebook" style={{ fontSize: '24px' }}></i></li>
                        <li><i class="fa fa-twitter" style={{ fontSize: '24px' }}></i></li>
                        <li><i class="fa fa-instagram" style={{ fontSize: '24px' }}></i></li> */}
                    </ul>

                </div>
                :
                auth.role == "admin" ?
                    <div className="nav-bar">
                        <ul>
                            <li> <Link style={{textDecoration:"none",color:"black"}} to="/adminPage">add product</Link></li>
                        </ul>
                        <NavbarProduct/>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            
                        </ul>
                        <ul style={{paddingLeft:800}}>
                            <li><Link style={{textDecoration:"none",color:"black"}} to="/" onClick={deconnection}>deconnection</Link></li>
                            <li><Link to='/panier' style={{textDecoration:"none",color:"black",paddingRight:40}} to="/panier">panier</Link></li>
                           
                            {/* <li><i class="fa fa-facebook" style={{ fontSize: '24px' }}></i></li>
                            <li><i class="fa fa-twitter" style={{ fontSize: '24px' }}></i></li>
                            <li><i class="fa fa-instagram" style={{ fontSize: '24px' }}></i></li> */}
                        </ul>

                    </div>
                    :
                    <div className="nav-bar">
                        <ul>
                            <li><Link style={{textDecoration:"none",color:"black"}} to="/">Home</Link></li>
                           
                        </ul>
                        <NavbarProduct/>
                        <ul style={{paddingLeft:800}}>
                            <li><Link style={{textDecoration:"none",color:"black"}} onClick={deconnection} to="/">deconnection</Link></li>
                            <li><Link to='/panier' style={{textDecoration:"none",color:"black",paddingRight:40}} to="/panier">panier</Link></li>
                            {/* <li><i class="fa fa-facebook" style={{ fontSize: '24px' }}></i></li>
                            <li><i class="fa fa-twitter" style={{ fontSize: '24px' }}></i></li>
                            <li><i class="fa fa-instagram" style={{ fontSize: '24px' }}></i></li> */}
                        </ul>
                    </div>

            }

                    
                     

        </div>
    )
}

export default NavBar
