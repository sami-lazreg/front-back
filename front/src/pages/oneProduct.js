import React from 'react'
import {Card,Button} from 'react-bootstrap'
import {addPanier} from '../actions/addPanier'
import {useDispatch,useSelector} from 'react-redux'
import {useState} from 'react'
export default function OneProduct({state}) {

  const info=useSelector(state=>state.authReducer)
  
  const data={
    url:state.url,
    name:state.name,
    price:state.price,
    }
    
  const dispatch = useDispatch()
  const Panier=()=>{
    dispatch(addPanier(data))
  }


  const information=()=>{
    if(!info.token){
      alert('please register before')
    }
    
  }
  
    return (
  <li className=' mt-5 mx-4' style={{listStyle:'none'}} >
   <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={state.url} />
  <Card.Body>
    <Card.Title><p style={{fontSize:14}}>{state.name}</p></Card.Title>
    <Card.Text>
      {`${state.price} TND`}
     
    </Card.Text>
    <Button variant="primary mr-3" onClick={()=>{
      Panier()
      information()
    }} >add</Button>
    <Button variant="primary ml-5" >View details</Button>
   
  </Card.Body>
      
</Card>
        </li>
    )
}