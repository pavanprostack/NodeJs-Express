const bcrypt = require('bcrypt')

// let user = {
//     id:101,
//     userName:"pavan",
//     password:"pavankalyan",
//     cc:"1234123412341234"
// }

// let salt = bcrypt.genSaltSync(10);
// let new_password = bcrypt.hashSync(user.password, salt)

// console.log(user.password);
// console.log(new_password);

// let flag = bcrypt.compareSync("pavankalyan", new_password)
// console.log(flag)

// if(flag){
//     console.log("Login Successfully")
// }
// else{
//     console.log("Login Failed")
// }




// Practice

let students = {
    id:101,
    userName:"pavan",
    password:"pavankalyan",
    cc:"1234123412341234"
}


let salt1=bcrypt.genSaltSync(10);
let newPassword=bcrypt.hashSync(students.password, salt1);

console.log(students.password)
console.log(newPassword)

let flag1=bcrypt.compareSync("pavankalyan", newPassword);
console.log(flag1)

if(flag1){
    console.log("Login Succesful")
}
else{
    console.log("Login Failed")
}