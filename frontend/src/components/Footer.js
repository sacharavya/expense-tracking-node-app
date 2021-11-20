import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  function getYear() {
    return new Date().getFullYear()
  }
  return (
    <footer>
      <Container>
        <Row>
          <Col className='copyright'>
            Copyright &copy; SARK Entreprises 2020 - {getYear()}
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
