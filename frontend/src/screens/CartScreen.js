import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../actions/cartAction.js"

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id
  const qty = location.search ? Number(location.search.split("=")[1]) : 1
  console.log(qty)
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart
  console.log(productId, qty, cartItems)

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  return (
    <div>
      <h1>CartScreen</h1>
    </div>
  )
}

export default CartScreen
