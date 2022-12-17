// npm i jsonwebtoken

// Creating Token (to create Token we need username or email, payload, secretkey, expiringtime is mandatory.)

const jwt = require('jsonwebtoken')

// userdata
let user = {
    id: 01,
    name: "Rahul Gandhi",
    password: "123456789",
    email: 'rahul@gmail.com'
}


// payload means data
let payload = {
    id:user.id,
    email:user.email
}

// secret key
let secretkey = '19970317DOB'

// create Token
let token = jwt.sign(payload, secretkey, {expiresIn:90000})
console.log(token)

// once we creates Token...based on Token only we verify userDetails.
// verify user details
let user_Id = jwt.verify(token, secretkey)
console.log(user_Id)





// Practice
let students={
    id:105,
    name:"pk",
    password:"1234",
    email:"pk@gmail.com"
}

// payload
let payload1 = {
    id:students.id,
    email:students.email
}

//secret key
let secretkey1="9876543"

let token1=jwt.sign(payload1, secretkey1, {expiresIn:90000})

let student_Id = jwt.verify(token1, secretkey1)
console.log(token1)