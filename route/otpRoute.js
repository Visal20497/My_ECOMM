import express from 'express'
import { otpGenrateHandler, otpValiateHandler } from '../contorller/otpController.js'
let route=express.Router()

// this is for the otp generation
route.post('/otp',otpGenrateHandler)

// this is for the otp validation
route.post('/otp-validate',otpValiateHandler)


export default route


