const dotenv = require('dotenv')
const path = require('path')

let file = path.join(__dirname, "config", "server", "config.env")
console.log(file)

dotenv.config({path:file})

console.log(process.env.HOST_NAME)
console.log(process.env.MONGO_DB_URL)
