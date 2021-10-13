import express from "express"
import dotenv from "dotenv"
import products from "./data/products.js"
import connectDB from "./config/db.js"
import colors from "colors"

dotenv.config()
connectDB()
const app = express()
const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)
app.get("/", (req, res) => {
  res.send("API is running.......!!!!!!!!!!")
})

app.get("/api/products", (req, res) => {
  res.json(products)
})
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})

// The res object basically refers to the response that'll be sent out as part of this API call.

// The res.send function sets the content type to text/Html which means that the client
// will now treat it as text. It then returns the response to the client.

// The res.json function on the other handsets the content-type header to application/JSON so that the client treats
//the response string as a valid JSON object. It also then returns the response to the client.
// using Stringfy we get JSON data
