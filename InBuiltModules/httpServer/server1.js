const http = require('http')
const dotenv = require('dotenv')
const path = require('path')


let file = path.join(__dirname, "config", "config.env")
dotenv.config({ path: file })

let port = process.env.PORT
// let hostName = process.env.HOST_NAME

console.log(port)
// console.log(hostName)


let server = http.createServer((request, response) => {
    response.writeHead(200, { 'content-type': 'text/html'});
    response.end(`<h1>Hello!, Enjoy the day</h1>`)
});

server.listen(port, () => {
    console.log(`Server is running on...${port}`)
})