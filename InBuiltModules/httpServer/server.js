// npm i http

 const http = require('http')


let server = http.createServer((request, response)=>{
    response.writeHead(200, {'content-type':'text/plain'})
    response.end("Hi, I'm Creating Server")
});

server.listen(8080, ()=>{
    console.log("Server is running on...")
})


// let server = http.createServer((request, response)=>{
//     response.writeHead(200,{'content-type':'text/plain'})
//     response.end("server is created")
// })

// server.listen(9090,()=>{
//     console.log("Hey...Server is running on buddy.....")
// })