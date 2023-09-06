import React from 'react'
import { Container, Row } from 'react-bootstrap'

function UnderConstructionScreen() {
  return (
    <div>
      <Container style={{'fontSize':'2.0rem', 'color':'#272937'}}>
        <Row style={{'minHeight': '40vh'}}></Row>
        <Row className='justify-content-center'>This feature is coming soon</Row>
        <i className="fa-solid fa-hammer pt-2"></i>
      </Container>
    </div>
  )
}

export default UnderConstructionScreen
