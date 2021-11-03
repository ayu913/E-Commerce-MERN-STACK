import React from "react"
import { Button, Form } from "react-bootstrap"

const loginScreen = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <FormContainer>
      <h1>Sign In</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='email'>
          <Form.Label></Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='password'>
          <Form.Label></Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter pasword'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type='Submit' variant='primary'>
          Sign In
        </Button>
      </Form>
      <Row className='py-3'>
        <Col>
          New Customer?
          <Link
            to={redirect ? `/register?redirect=${redirect}` : "/register"}
          ></Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default loginScreen
