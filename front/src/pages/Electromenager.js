import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {getAction} from "../actions/getAction"
import {useEffect} from 'react'
import OneProduct from './oneProduct';


function Electromenager() {
    const dispatch=useDispatch();
const state=useSelector(state=>state.getReducer)

useEffect(()=>{
     dispatch(getAction())
},[]);

let electro= state.filter(el=>el.category== "electromenager")
    return (
        <div>
            <div>{electro.map((el)=><div><OneProduct state={el}/></div>)}</div>
        </div>
    )
}

export default Electromenager
