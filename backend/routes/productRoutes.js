import express from "express"
// import asyncHandler from "express-async-handler"
// import Product from "../models/productModel.js"
const router = express.Router()
import {
  getProducts,
  getProductById,
  deleteProduct,
} from "../controllers/productController.js"

import { protect, admin } from "../middleware/authMiddleware.js"

// // @desc  Fetch all products
// // @route  GET/api/products
// // acces   Public
// router.get(
//   "/",
//   asyncHandler(async (req, res) => {
//     const products = await Product.find({})
//     res.json(products)
//   })
// )
// // @desc    Fetch single product
// // @route   GET /api/products/:id
// // @access  Public
// router.get(
//   "/:id",
//   asyncHandler(async (req, res) => {
//     const product = await Product.findById(req.params.id)

//     if (product) {
//       res.json(product)
//     } else {
//       res.status(404)
//       throw new Error("Product not found")
//     }
//   })
// )
router.route("/").get(getProducts)
router.route("/:id").get(getProductById).delete(protect, admin, deleteProduct)
export default router
