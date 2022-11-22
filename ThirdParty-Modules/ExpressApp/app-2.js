const express = require('express')
const app = express();


/*
API URL:localhost:8080
Method:GET
Req Fields:None
Access Type:Public
*/

app.get("/", (req, res)=>{
    res.send("<h2>This is Home Page...</h2>")
})

/*
API URL:localhost:8080/about
Method:GET
Req Fields:None
Access Type:Public
*/

app.get("/about/", (req, res)=>{
    res.send("<h2>This is About Page...from App-2...</h2>")
})

/*
API URL:localhost:8080/services
Method:GET
Req Fields:None
Access Type:Public
*/

app.get("/services/", (req, res)=>{
    res.send("<h2>This is Services Page...</h2>")
})

app.listen(6060, ()=>{
    console.log(`Server is running on....http://localhost:${6060}`)
})
