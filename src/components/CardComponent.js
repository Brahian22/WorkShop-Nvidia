import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { getData } from '../helpers/getData'
import { url } from '../helpers/url'


const CardComponent = () => {

  const [session, setSession] = useState([])

  useEffect(() => {
   getSession()
  }, [])
  
  const getSession = async () => {
    const data = await getData(url)
    setSession(data)
  }

  return (

    <div>
      {
    session.map( element => (
    <Card key={element.id}>
        <Card.Header>Featured</Card.Header>
        <Card.Body>
            
            <Card.Title>{element.title}</Card.Title>
            <Card.Text>{element.description}</Card.Text>
            <Card.Text>{element.industry_segment}</Card.Text>
            <Card.Text>{element.session_type}</Card.Text>
            <Card.Text>{element.audience_level}</Card.Text>
        <Button variant="primary">Watch details</Button>
        </Card.Body>
    </Card>))
    }
    </div>
  )
}

export default CardComponent