const fs = require('fs')

// Writing
let text = fs.writeFileSync("one.txt", "Hi, I'm Learning Nodejs class today...", "utf-8")



// Reading
let first = fs.readFileSync("one.txt", "utf-8")
console.log(first)


// Writing
fs.writeFileSync("two.txt", first+ "okk...reading Successfully.....", "utf-8")


// reading
let second = fs.readFileSync("two.txt", "utf-8")
console.log(second)
