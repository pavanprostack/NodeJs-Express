import express from 'express'
import mongoose from 'mongoose'

const app = express();

app.get("/", (req, res)=>{      // "req" is for requesting data   "res" for to display data
    res.send("<h1>Hello World!!</h1>");
}) 

mongoose.connect("mongodb+srv://pavankalyan:Lucky@107@cluster0.dwaa6eh.mongodb.net/?retryWrites=true&w=majority").then(()=>
    console.log("Mongo DB - Connected Successfully!")
).catch((err)=>console.log(err));

app.listen(8000, ()=>{
    console.log("Server is running on...");
})