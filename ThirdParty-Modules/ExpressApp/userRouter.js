const express = require('express')
const router = express.Router();


// URL:localhost:9099/user

router.get("/", (req, res) => {
    res.send("Here we are storing user data using Routers concept")
})

// URL:localhost:9099/user/login

router.post("/login", (req, res) => {
    res.send("this login so it is POST")
})

// it is ES5 default Export syntax
module.exports = router