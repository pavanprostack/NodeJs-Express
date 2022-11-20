const fs = require('fs')
const http = require('http')
const path = require('path')
const dotenv = require('dotenv')


let file = path.join(__dirname, "config", "config.env")
console.log(file)

dotenv.config({path:file})

let port=process.env.PORT
let hostName=process.env.HOST_NAME

let server = http.createServer((request, response)=>{
    response.writeHead(200, {'content-type':'text/html'})
    fs.readFile('./Views/index.html', 'utf-8', (err, data)=>{
        if(err) throw err
        response.end(data)
    })
});

server.listen(()=>{
    console.log(`NodeServer is running on....http//${hostName}:${port}`)
})