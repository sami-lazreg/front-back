import React from 'react'
import {Card,Button} from 'react-bootstrap'

export default function oneProduct({state}) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={state.url} />
  <Card.Body>
    <Card.Title>{state.name}</Card.Title>
    <Card.Text>
      portabel 5orda me techriwchi
    </Card.Text>
    <Button variant="primary">add</Button>
  </Card.Body>
</Card>

        </div>
    )
}
