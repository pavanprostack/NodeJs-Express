// const express = require('express')
// const app = express();

// app.get("/", (request, response)=>{
//     response.send("Hello, This is Express App....")   // Sending information using express app
// })

// app.get("/about/",(request, response)=>{
//     response.send("Hello, This is About Information....")
// })

// app.listen(7070, (err)=>{
//     if(err) throw err
//     console.log(`Your Server is running on.....http://localhost:${7070} `)
// })



// practice
const express=require('express');
const app=express();

app.get("/", (req, res)=>{
    res.send("<h2>This is just practice</h2>")
})

app.get("/about", (req, res)=>{
    res.send("This is about page")
})

app.listen(5000, ()=>{
    console.log(`Server is running on http://localhost:5000`)
})

