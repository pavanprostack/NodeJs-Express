
 const http = require('http')


let server = http.createServer((request, response)=>{
    response.writeHead(200, {'content-type':'text/plain'})  // this line is Optional
    response.end("Hi, I'm Creating Server")
});

server.listen(8080,()=>{                         // here 8080 is optional
    console.log("Server is running on http://localhost:8080")
})




// const http = require('http');

// const server = http.createServer((req, res)=>{
//     // res.writeHead(200, {"content-type":"text/html"});   
//     res.end("This is just a practice bro....")
// })

// server.listen(8000, ()=>{
//     console.log("Server is running on http://localhost:8000")
// })