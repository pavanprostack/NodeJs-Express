const bcrypt = require('bcrypt')

let user = {
    id:101,
    userName:"pavan",
    password:"pavankalyan",
    cc:"1234123412341234"
}

let salt = bcrypt.genSaltSync(10);
let new_password = bcrypt.hashSync(user.password, salt)

console.log(user.password);
console.log(new_password);

let flag = bcrypt.compareSync("pavankalyan", new_password)
console.log(flag)

if(flag){
    console.log("Login Successfully")
}
else{
    console.log("Login Failed")
}