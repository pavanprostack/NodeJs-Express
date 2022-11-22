const fs = require('fs')
const http = require('http')
const path = require('path')
const dotenv = require('dotenv')
const url = require('url')


let file = path.join(__dirname, "config", "config.env")
console.log(file)

dotenv.config({path:file})


let PORT=process.env.PORT
let host_Name=process.env.HOST_NAME
// console.log(port)
// console.log(hostName)


let server = http.createServer((request, response)=>{
    let url = request.url;
    console.log(url)
    response.writeHead(200, {'content-type':'text/html'})
    fs.readFile('views/index.html', 'utf-8', (err, data)=>{
        if(err) throw err
        response.end(data)
    })
});

server.listen( ()=>{
    console.log(`Server is running on.... http://${host_Name}:${PORT}`)
})