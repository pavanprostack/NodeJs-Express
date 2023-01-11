const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
// const productRouter=require("./productRouter")

const app=express();

dotenv.config({path:"config/config.env"});
const port=process.env.PORT;
const hostName=process.env.HOST_NAME

app.get("/", (req, res)=>{
    res.send("This router server creation");
})

app.use(morgan('tiny'));

app.use("user", require("./productRouter"))
//  app.use("user", productRouter)

app.listen( port, (err)=>{
    if(err) throw err;
    console.log(`Server is running on http://localhost:${port}`);
})