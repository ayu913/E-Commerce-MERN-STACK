import express from "express"
const router = express.Router()
import {
  authUser,
  getUserProfile,
  getUsers,
  registerUser,
  updateUserProfile,
} from "../controllers/userController.js"
import { admin, protect } from "../middleware/authMiddleware.js"

router.post("/login", authUser)
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)
router.route("/").post(registerUser).get(protect, admin, getUsers)

export default router
