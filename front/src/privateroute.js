import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import {useSelector} from 'react-redux'


const PrivateRoute=({component:component,...rest}) =>{
    const auth=useSelector(state=>state.authReducer)
    
    return (
        <div>
                   
        </div>
    )
}
export default PrivateRoute
