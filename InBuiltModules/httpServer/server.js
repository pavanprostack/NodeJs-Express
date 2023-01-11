const http = require('http');
const dotenv = require('dotenv');

dotenv.config({path:"config/config.env"});

let port=process.env.PORT;
let hostName= process.env.HOST_NAME;

const server = http.createServer((req, res)=>{
    res.writeHead(200, {"content-type":"text/html"});
    res.end("<h3>http server creation</h3>");
})

server.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}` )
})