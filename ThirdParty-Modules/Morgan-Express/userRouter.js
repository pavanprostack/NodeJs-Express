const express = require('express')
const router = express.Router();

router.get("/", (request, response) => {
    response.send("This is using morgan")
})

router.post("/login", (request, response) => {
    response.send("this is user login")
})

module.exports = router