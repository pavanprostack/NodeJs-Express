const path = require('path')
const fs = require('fs')

// joining path
let p = path.join(__dirname, "kgf3", "data", "one.json");
console.log(p)

let q=path.join(__dirname, "one", "two", "three.txt")
console.log(q)

let filePath = path.join(__dirname, "pk", "two.txt",)
console.log(filePath);


// Writing File
fs.writeFile("write.txt", "This is path module writing practice", "utf-8", (err)=>{
    if(err) throw err
})

// reading data
fs.readFile(path.join(__dirname, "kgf3", "data", 'one.json'), 'utf-8', (err, data) => {
    if (err) throw err
    // console.log(data)
    console.log(JSON.parse(data))
})

fs.readFile(path.join(__dirname,"write.txt"), "utf8", (err, readData)=>{
    if (err) throw err
    console.log(readData)
})

fs.readFile(path.join(__dirname, "kgf3", "data", 'one.json'), "utf-8", (err, data)=>{
    if(err) throw err;
    let newData= JSON.parse(data);
    console.log(newData)
})

