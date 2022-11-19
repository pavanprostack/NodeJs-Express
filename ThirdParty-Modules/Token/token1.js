// Generating Token   

const jwt = require('jsonwebtoken')

// student data
let student = {
    id: 102,
    name: "saikumar",
    email: "sai@gmail.com",
    password: "45678923"
}

// payload
let payload = {
    id: student.id,
    email: student.email
}

// secret key
let secretkey = "19971203DOB"

// Token
let token = jwt.sign(payload, secretkey, { expiresIn: 120000 })
console.log(token)

//verify studentdetails 
let verify = jwt.verify(token, secretkey)
console.log(verify)
