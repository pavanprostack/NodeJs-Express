// step : 6:-

import express from 'express'
import { signUp, verifyOtp } from '../controllers/userController.js'

const router = express.Router();

router.route("/signup").post(signUp)

router.route("/signup/verify").post(verifyOtp)

export default router