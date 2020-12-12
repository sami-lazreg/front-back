import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {getAction} from "../actions/getAction"
import {useEffect} from 'react'
import OneProduct from './oneProduct';


function Machine() {
const dispatch=useDispatch();
const state=useSelector(state=>state.getReducer)

useEffect(()=>{
     dispatch(getAction())
},[]);

let electro= state.filter(el=>(el.category== "électroménager")&&(el.name.includes('Lave')))
    return (
        <ul className=' product ' >
            {electro.map((el)=><OneProduct state={el}/>)}
        </ul>
    )
}

export default Machine
