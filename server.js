import express from 'express'
import mongoose from 'mongoose'
import DbConnection from './config/db.js'
import morgan from 'morgan'
import dotenv from 'dotenv'
import cors from 'cors'
import authRoute from './route/authRoute.js'
import categoryRoute from './route/createRoute.js'
import productRoute from './route/productRoute.js'
import orderRoute from './route/orderRoute.js'
import otpRoute from './route/otpRoute.js'

let app=express()
// config
// this is for dotenv
dotenv.config()
//this is for setting your body
app.use(express.json())

//this is for your morgan
app.use(morgan('dev'))

//this is for database
DbConnection()
//this is for the cors
app.use(cors())


let PORT=process.env.PORT;
let MODE=process.env.MODE
// console.log(process.env.MODE)



//auth Route 
app.use('/api/v1',authRoute)
//Category Route
app.use('/api/v1',categoryRoute)
//Product Route
app.use('/api/v1',productRoute)
//order Route
app.use('/api/v1',orderRoute)
//otp Route
app.use('/api/v1',otpRoute)



app.listen(PORT,()=>{
    console.log(`server is started at http://localhost:${PORT} in ${MODE} mode`)
})
