const fs = require('fs')

let first = fs.writeFileSync("one.txt", "Hi, I'm Learning Nodejs class today...", "utf-8")
console.log(first)

let text = fs.readFileSync("one.txt", "utf-8")
console.log(text)

let second = fs.writeFileSync("two.txt", text+ "reading Successfully.....", "utf-8")
console.log(second)

