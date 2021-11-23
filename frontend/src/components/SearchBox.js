import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push("/")
    }
  }

  return (
    <Form onSubmit={submitHandler} inline className='d-flex mx-5'>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products...'
        className='mr-sm-2 ml-sm-5'
      ></Form.Control>
      <Button type='submit' variant='dark' className='p-2 mx-2'>
        Search
      </Button>
    </Form>
  )
}

export default SearchBox

{
  /* <form class="d-flex">
<input class="form-control me-sm-2" type="text" placeholder="Search">
<button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
</form> */
}
