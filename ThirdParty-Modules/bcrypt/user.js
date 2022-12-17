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




// Practice

let student={
    id:104,
    userName:"pk",
    password:"subbu",
    cc:"1234123412341235"
}

let salt1=bcrypt.genSaltSync(10);
let new_password1=bcrypt.hashSync(student.password, salt1)

console.log(student.password);
console.log(new_password1);

let flag1 = bcrypt.compareSync("54546", new_password1);

if(flag1){
    console.log("login succefully.")
}else{
    console.log("login failed.")
}