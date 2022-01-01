import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { Form, Col, Row, Button } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'

const useQuery = () => {
  return new URLSearchParams(useLocation().search)
}

const RegisterScreen = ({ history }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  // const userRegister = useSelector((state) => state.userRegister)
  // const { userInfo } = userRegister

  // Process the query search string and destructure a redirect search
  // value, providing a "/" fallback if there is no redirect search value
  const { redirect = '/dashboard' } = useQuery()

  // const redirect = location.search
  //   ? location.search.split('=')[1]
  //   : '/dashboard'

  useEffect(() => {
    history.push(redirect)
  }, [history, redirect])

  const submitHandler = () => {
    if (password !== confirmPassword) {
      setMessage('Invalid')
    } else {
      console.log('Hello')
    }
  }

  return (
    <FormContainer>
      <h1>Sign Up</h1>
      <Form onSubmit={submitHandler}>
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
