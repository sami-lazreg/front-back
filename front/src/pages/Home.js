import React from 'react'

import {useDispatch,useSelector} from 'react-redux'
import {getAction} from "../actions/getAction"
import {useEffect} from 'react'
import OneProduct from './oneProduct';


const Home = () => {
    const state=useSelector(state=>state.getReducer)
   
    const dispatch=useDispatch();
        
        useEffect(()=>{
            dispatch(getAction())
       },[]);
       

    return (
        
        <div>
            
            
            <ul className=' product ' >
            {state.map((el,i)=> <div key={i}><OneProduct state={el} /></div>)}
            </ul>
            
        </div>
    )
}

export default Home
