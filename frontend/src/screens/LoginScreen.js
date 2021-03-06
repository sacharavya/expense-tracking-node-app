import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, withRouter } from 'react-router-dom'
import { Form, Col, Row, Button } from 'react-bootstrap'

import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'

import { login } from '../actions/userActions'

const useQuery = () => {
  return new URLSearchParams(useLocation().search)
}

const LoginScreen = ({ history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  // Process the query search string and destructure a redirect search
  // value, providing a "/" fallback if there is no redirect search value
  const { redirect = '/dashboard' } = useQuery()

  useEffect(() => {
    if (userInfo) {
      // history.push('/dashboard')
      console.log('Nice')
      console.log(userInfo)
    }
  }, [history, userInfo])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }
  return (
    <FormContainer>
      <h1>Sign In</h1>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='email'>
          <Form.Label>Email Adress</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='password'>
          <Form.Label>password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary' className='rounded'>
          Sign In
        </Button>
      </Form>
      <Row className='py-3'>
        <Col>
          New Customer?{' '}
          <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
            {' '}
            Register
          </Link>
        </Col>
      </Row>
      <Row className='py-2'>
        <Col>Forgot password? Reset here!</Col>
      </Row>
    </FormContainer>
  )
}

export default LoginScreen
