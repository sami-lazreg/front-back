import React from 'react'
import {Card,Button} from 'react-bootstrap'

export default function oneProduct({state}) {
    return (
  <li className=' mt-5 mx-4' style={{listStyle:'none'}} >
   <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={state.url} />
  <Card.Body>
    <Card.Title><p style={{fontSize:14}}>{state.name}</p></Card.Title>
    <Card.Text>
      {`${state.price} TND`}
    </Card.Text>
    <Button variant="primary mr-3" >add</Button>
    <Button variant="primary ml-5" >View details</Button>
  </Card.Body>
</Card>

        </li>
    )
}
