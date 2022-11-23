const dotenv = require('dotenv');
const path = require('path')
const morgan = require('morgan')
const express = require('express')
const app = express();


let file = path.join(__dirname,"config" ,"config.env")

dotenv.config({path:file});

let port=process.env.PORT;
let hostName = process.env.HOST_NAME;

app.use(morgan('tiny'))

app.get("/",(req, res)=>{
    res.send("Learning Express Code")
})

app.get("/user/", (req, res)=>{
    res.send("This is user root")
})

app.get("/user/all/", (req, res)=>{
    res.send("this is User All")
})

app.post("/user/add", (req, res)=>{
    res.send("This is User Addition")
})

app.put("/user/update", (req, res)=>{
    res.send("This is User Update")
})

app.delete("/user/delete", (req, res)=>{
    res.send("This is User Deletion")
})

app.listen(port, ()=>{
    console.log(`Server is running on.....http://localhost:${port}`)
})