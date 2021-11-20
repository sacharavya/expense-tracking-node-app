import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Col, Row, Button } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'

const RegisterScreen = () => {
  return (
    <FormContainer>
      <h1>Sign Up</h1>
      <Form>
        <Form.Group controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control type='name' placeholder='Enter name'></Form.Control>
        </Form.Group>
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
        <Form.Group controlId='confirmPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Confirm password'
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary' clasName='rounded'>
          Register
        </Button>
      </Form>
      <Row className='py-3'>
        <Col>
          Have an account? <Link to='/'> Login</Link>
        </Col>
      </Row>
      <Row className='py-3'>
        <Col>
          Adding feature to validate email via sending confrmation email to
          respective email user entered
        </Col>
      </Row>
    </FormContainer>
  )
}

export default RegisterScreen
