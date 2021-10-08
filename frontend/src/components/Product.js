import React from "react"
import { Card } from "react-bootstrap"

const Product = ({ product }) => {
  return (
    <div>
      <Card className='my-3 p-3 rounded bg-light'>
        <a href={`/product/${product._id}`}>
          <Card.Img src={product.image}></Card.Img>
        </a>
        <Card.Body className='my-3 p-3 rounded'>
          <a href={`/product/${product._id}`}>
            <Card.Title as='div'></Card.Title>
          </a>
          <Card.Text as='div'>
            <div className='my-3'>
              {product.rating} as {product.numReviews}
            </div>
          </Card.Text>
          <Card.Text as='h3'>${product.price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Product
