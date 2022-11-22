const fs = require('fs')
const http = require('http')
const path = require('path')
const dotenv = require('dotenv')
const url = require('url')


let file = path.join(__dirname, "config", "config.env")
// console.log(file)

dotenv.config({ path: file })


let PORT = process.env.PORT;
let HOST_NAME = process.env.HOST_NAME;
console.log(PORT)
console.log(HOST_NAME)


let server = http.createServer((request, response) => {
    let url = request.url;
    console.log(url)
    response.writeHead(200, { 'content-type': 'text/html' });

    if(url=="/"){
        fs.readFile('./views/index.html', 'utf-8', (err, data) => {
            if (err) throw err;
            response.end(data);
        })
    }

    if(url=="/about"){
        fs.readFile("./views/about.html", "utf-8", (err, data)=>{
            if(err) throw err
            response.end(data)
        })
    }

    if(url=="/services"){
        fs.readFile("./views/services.html", "utf-8", (err, data)=>{
            if(err) throw err
            response.end(data)
        })
    }

    if(url=="/contact"){
        fs.readFile("./views/contact.html", "utf-8", (err, data)=>{
            if(err) throw err
            response.end(data)
        })
    }
    
});

server.listen(PORT, () => {
    console.log(`Server is running on.....:${PORT}`)
})