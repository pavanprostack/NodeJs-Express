const dotenv = require('dotenv')
const morgan = require('morgan')
const express = require('express')
// Here created express app

const app = express(); 


dotenv.config({path:"./config/config.env"});

let port = process.env.PORT;
let hostName = process.env.HOST_NAME;

// using morgan
//morgan is a Node. js and Express middleware to log HTTP requests and errors, and simplifies the process. In Node. js and Express, middleware is a function that has access to the request and response lifecycle methods, and the next() method to continue logic in your Express server.
app.use(morgan('tiny'))

// calling user data from userRouter file using Morgan Package
app.use("/user", require('./userRouter'))

/*
URL: http://localhost:9099/
*/

app.listen(port, (err)=>{
    if(err) throw err;
    console.log(`Server is Running on...http://localhost:${port}`)
})

