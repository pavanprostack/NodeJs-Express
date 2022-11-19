// npm i dotenv

//dotenv is used for Reading Application Configuration Details.
const dotenv = require('dotenv')
const path = require('path')

// file path
let file= path.join(__dirname, "config", "server", 'config.env')
console.log(file)

// To Read file data
dotenv.config({path:file})

// process.env is global variable
console.log(process.env.PORT)
console.log(process.env.SECRET_KEY)


