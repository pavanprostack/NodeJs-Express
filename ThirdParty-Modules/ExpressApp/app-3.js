// const dotenv = require('dotenv');
// const morgan = require('morgan')
// const express = require('express')
// const app = express();


// // dotenv.config({path:file});
// dotenv.config({path:"./config/config.env"});


// let port=process.env.PORT;
// console.log(port)
// let hostName = process.env.HOST_NAME;

// app.use(morgan('tiny'))

// app.get("/",(req, res)=>{
//     res.send("Learning Express Code")
// })

// app.get("/user/", (req, res)=>{
//     res.send("This is user root")
// })

// app.get("/user/all/", (req, res)=>{
//     res.send("this is User All")
// })

// app.post("/user/add", (req, res)=>{
//     res.send("This is User Addition")
// })

// app.put("/user/update", (req, res)=>{
//     res.send("This is User Update")
// })

// app.delete("/user/delete", (req, res)=>{
//     res.send("This is User Deletion")
// })

// app.listen(port, ()=>{
//     console.log(`Server is running on.....http://localhost:${port}`)
// })

// practice
const express=require('express');
const morgan=require('morgan');
const dotenv=require('dotenv');

const app=express();

dotenv.config({path:"config/config.env"});
const port = process.env.PORT;
const hostName = process.env.HoST_NAME;

app.get("/", (req, res)=>{
    res.send("This is server root request")
})

app.get("/user", (req, res)=>{
    res.send("This is user root request")
})

app.get("/user/all", (req, res)=>{
    res.send("This is user all request")
})

app.post("/user/add", (req, res)=>{
    res.send("This is user post request")
})

app.put("/user/put", (req, res)=>{
    res.send("This is user put request")
})

app.delete("/user/delete", (req, res)=>{
    res.send("This is user delete request")
})

app.listen(port, (err)=>{
    if(err) throw err;
    console.log(`Server is running on http://localhost:${port}`)
})

