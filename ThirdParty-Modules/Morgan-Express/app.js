const dotenv = require('dotenv')
const morgan = require('morgan')
const express = require('express')

const app = express();

dotenv.config({path:'./config.env'})

let PORT=process.env.PORT
let HOSTNAME=process.env.HOST_NAME
console.log(PORT)

app.use(morgan('tiny'))

app.use("/user", require('./userRouter.js'))

app.listen(PORT, ()=>{ 
    console.log(`Server is running on http://localhost:${PORT}`)
})