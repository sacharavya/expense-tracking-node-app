import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Col, Row, Button } from 'react-bootstrap'
// import Message from '../components/Message'
// import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'

const LoginScreen = () => {
  // const redirect = location.search ? location.search.split('=')[1] : '/'

  return (
    <FormContainer>
      <h1>Sign In</h1>
      <Form>
        <Form.Group controlId='email'>
          <Form.Label>Email Adress</Form.Label>
          <Form.Control type='email' placeholder='Enter email'></Form.Control>
        </Form.Group>
        <Form.Group controlId='password'>
          <Form.Label>password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary' className='rounded'>
          Sign In
        </Button>
      </Form>
      <Row className='py-3'>
        <Col>
          New Customer? <Link to='/register'> Register </Link>{' '}
        </Col>
      </Row>
      <Row className='py-2'>
        <Col>Adding feature to reset password.</Col>
      </Row>
    </FormContainer>
  )
}

export default LoginScreen
