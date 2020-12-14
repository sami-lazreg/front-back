import React from 'react'

import {useDispatch,useSelector} from 'react-redux'
import {getAction} from "../actions/getAction"
import {useEffect} from 'react'
import OneProduct from './oneProduct';


const Home = () => {
    const dispatch=useDispatch();
        const state=useSelector(state=>state.getReducer)
        useEffect(()=>{
            dispatch(getAction())
       },[]);
       

    return (
        
        <div>
            
            
            <ul className=' product ' >
            {state.map((el)=><OneProduct state={el}/>)}
            </ul>
            
        </div>
    )
}

export default Home
