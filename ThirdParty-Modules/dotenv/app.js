// npm i dotenv

//dotenv is used for Reading Application Configuration Details.
const dotenv = require('dotenv')

// To Read file data
dotenv.config({path:"config/config.env"})

// process.env is global variable
console.log(process.env.PORT)
console.log(process.env.SECRET_KEY)


