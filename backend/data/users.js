import bcrypt from "bcryptjs"

const users = [
  {
    name: "Ayush Singla",
    email: "ayush1234@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Rohan Shah",
    email: "rohan789@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Pratik  Sharma",
    email: "pratik5678@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
]

export default users
