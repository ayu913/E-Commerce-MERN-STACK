import express from "express"
import dotenv from "dotenv"
import products from "./data/products.js"
import connectDB from "./config/db.js"
import colors from "colors"
import productRoutes from "./routes/productRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import orderRoutes from "./routes/orderRoutes.js"
import { notFound, errorHandler } from "./middleware/errorMiddleware.js"
import uploadRoutes from "./routes/uploadRoutes.js"
import path from "path"
import morgan from "morgan"

dotenv.config()
connectDB()
const app = express()
app.use(express.json())
const PORT = process.env.PORT || 5000

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"))
}

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)
app.use("/api/users", userRoutes)
app.use("/api/products", productRoutes)
app.use("/api/orders", orderRoutes)
app.use("/api/upload", uploadRoutes)
app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
)

const __dirname = path.resolve()
app.use("/uploads", express.static(path.join(__dirname, "/uploads")))

app.use(notFound)
app.use(errorHandler)
app.get("/", (req, res) => {
  res.send("API is running.......!!!!!!!!!!")
})

// app.get("/api/products", (req, res) => {
//   res.json(products)
// })
// app.get("/api/products/:id", (req, res) => {
//   const product = products.find((p) => p._id === req.params.id)
//   res.json(product)
// })

// The res object basically refers to the response that'll be sent out as part of this API call.

// The res.send function sets the content type to text/Html which means that the client
// will now treat it as text. It then returns the response to the client.

// The res.json function on the other handsets the content-type header to application/JSON so that the client treats
//the response string as a valid JSON object. It also then returns the response to the client.
// using Stringfy we get JSON data
