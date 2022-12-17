const express = require('express')
const app = express();

app.get("/", (request, response)=>{
    response.send("Hello, This is Express App....")   // Sending information using express app
})

app.get("/about/",(request, response)=>{
    response.send("Hello, This is About Information....")
})

app.listen(7070, (err)=>{
    if(err) throw err
    console.log(`Your Server is running on.....http://localhost:${7070} `)
})



// practice
app.get("/", (req, res)=>{
    res.send("pavanklayan")
});

app.listen(9000, ()=>{
    console.log(`Your Server is running on.....http://localhost:${9000} `)
})