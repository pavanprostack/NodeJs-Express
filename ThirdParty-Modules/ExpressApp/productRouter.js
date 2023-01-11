const express = require('express');
const { route } = require('./userRouter');
const router = express.Router();

router.get("/", (req, res)=>{
    res.send("This is product root request")
})

router.post("/create",(req, res)=>{
    res.send("Iam creating some products")
})

module.exports=router