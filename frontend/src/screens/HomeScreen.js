import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Row, Col } from "react-bootstrap"
import Product from "../components/Product"

import { listProducts } from "../actions/productActions"

const HomeScreen = () => {
  const dispatch = useDispatch()

  const productList = useSelector((state) => {
    return state.productList
  })
  const { loading, error, products } = productList
  console.log(productList)
  console.log(products)

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  // const productList = useSelector((state) => state.productList)
  // console.log("snlnlsd")
  // console.log(productList)
  // const { loading, error, products } = productList

  return (
    <React.Fragment>
      <h1>Latest Products</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <Row>
            {products.map((product) => {
              return (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              )
            })}
          </Row>
        </>
      )}
    </React.Fragment>
  )
}

export default HomeScreen
