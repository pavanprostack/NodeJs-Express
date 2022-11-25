const dotenv = require('dotenv')
const morgan = require('morgan')
const express = require('express')
const app = express();



dotenv.config({path:'./config.env'})
let PORT=process.env.PORT
console.log(PORT)

app.use(morgan('tiny'))

app.use("/user", require('./userRouter'))

app.listen(PORT, (err)=>{
    if(err) throw err
    console.log(`Server is running on.....http://localhost:${PORT}`)
})