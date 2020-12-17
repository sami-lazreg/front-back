import React from 'react'
import {useState,useEffect} from 'react'
import {useDispatch} from 'react-redux'
import { deleteAction } from '../actions/deleteAction'
import { getPanier } from '../actions/getPanier'
import {updatePanier}  from '../actions/updatePanier'



const Block = ({el}) => {
  
   
     const [info,setInfo]=useState({
      id:el._id,
      amount:el.amount
      
     })
     const [zouhour,setZouhour]=useState({
       a:1
     })
 

     const dispatch=useDispatch()
     useEffect(()=>{
      dispatch(updatePanier(info))
     },[info,zouhour])

     const Delete=()=>{
      dispatch(deleteAction({id:el._id}))
      setZouhour({...zouhour,a:zouhour.a+1})
       
      
     }
     
     
     const plus=()=>{
       setInfo({...info,amount:info.amount+1})
      
     }
     const minus=()=>{
      setInfo({...info,amount:info.amount-1})
      dispatch(updatePanier(info))
    }
    
    return (
        <div>
            <ul className='row items' >
            <li className='col-xs-3 col-sm-3'>
            <img src={el.url} className='img' width={100}/>
            </li>
            <li className='col-xs-3 col-sm-3'>
              <p>{el.price}</p>
            </li>
            <li className='col-xs-3 col-sm-3 flex'>
            <div style={{marginRight:6}}  ><i className="fa fa-minus-square" style={{fontSize:"24px"}} onClick={minus} ></i></div>
              <p>{info.amount}</p>
              <div style={{marginLeft:6}} ><i className="fa fa-plus-square" style={{fontSize:"24px"}} onClick={plus}></i></div>
            </li>
            <li className='col-xs-3 col-sm-3 flex'>
            <p className='margin'>total</p>
            <i className="fa fa-close" style={{fontSize:"30px",color:"red", marginLeft:"80px"}} onClick={Delete} ></i>
            </li>
            
            </ul>
            <hr/>
        </div>
    )
}

export default Block
