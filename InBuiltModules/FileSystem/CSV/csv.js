const fs = require('fs')

fs.readFile("one.csv", "utf-8", (err, data)=>{
    if(err) throw err
    console.log(data)
})

// fs.readFile("one.csv", "utf-8", (err, data)=>{
//     if(err) throw err
//     console.log(data);
// })

fs.readFile("one.csv", "utf-8", (err, data)=>{
    if(err) throw err;
    console.log(data)
})