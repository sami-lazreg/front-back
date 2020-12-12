import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {getAction} from "../actions/getAction"
import {useEffect} from 'react'
import OneProduct from './oneProduct'
import  {Link}   from 'react-router-dom'


function Electromenager() {
const dispatch=useDispatch();
const state=useSelector(state=>state.getReducer)

useEffect(()=>{
     dispatch(getAction())
},[]);

let electro= state.filter(el=>el.category== "électroménager")
    return (
        <div>
        <Link to='Refregirateur'>Refregirateur</Link>
        <Link to='Machine'>Machine</Link>
        <ul className=' product ' >
            {electro.map((el)=><OneProduct state={el}/>)}
        </ul>
     
             <Link to='Refregirateur'>Refregirateur</Link>
        <Link to='Machine'>Machine</Link>
        </div>
       
    )
}

export default Electromenager
