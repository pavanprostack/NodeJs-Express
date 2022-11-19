const path = require('path')
const fs = require('fs')

// // joining path
// let p = path.join(__dirname, "pk", "KGF", "one.json")
// console.log(p)


// //reading data
// fs.readFile(path.join(__dirname, "files", "data", 'one.json'), 'utf-8', (err, data) => {
//     if (err) throw err
//     console.log(data)
//     //console.log(JSON.parse(data))
// })


// let filePath = path.join(__dirname, "pk", "two.txt",)
// console.log(filePath);


// // 
// fs.writeFile("write.txt", "This is path module writing practice", "utf-8", (err)=>{
//     if(err) throw err
// })



// fs.readFile(path.join(__dirname,"write.txt"), "utf8", (err, readData)=>{
//     if (err) throw err
//     console.log(readData)
// })


fs.writeFile("sai.txt","vamsi.txt", "This is sai path module writing practice", "vamsi path", "utf-8", (err)=>{
        if(err) throw err
     })