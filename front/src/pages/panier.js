import React from 'react'
import {getPanier} from '../actions/getPanier'


import { useSelector ,useDispatch} from "react-redux";
import Block from './Block';
import { useEffect } from "react";
const Panier=()=>{
    const cart= useSelector((state) => state.getPanier);
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getPanier())
   },[]);
    return  (             
         <div class='container'>
             <ul className='row responsive '>
             <li className='col-xs-3 col-sm-3 '><h5>Product</h5></li>
             <li className='col-xs-3 col-sm-3 '><h5>Price</h5></li>
             <li className='col-xs-3 col-sm-3 '><h5>Quantity</h5></li>
             <li className='col-x>s-3 col-sm-3 '><h5>Total</h5></li>
            </ul>
            <hr/>
            <div>
            {cart.map((el,i)=><div key={i}><Block el={el}/></div>)}
            </div>
            </div>
    )  
}
export default Panier;