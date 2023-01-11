const fs = require('fs');
const { json } = require('stream/consumers');


// Writing

fs.writeFile("one.txt", "This is first file", "utf-8", (err)=>{
    if(err) throw err
})

fs.writeFile("pk.text", "Iam pavankalyan - Begger", "utf-8", (err)=>{
    if(err) throw err;
})

fs.writeFile("two.txt","This is second file", "utf-8", (err)=>{
    if(err) throw err;
})


// Reading
fs.readFile("one.txt", "utf-8", (err, data)=>{
    if(err) throw err
    console.log(data)
})

fs.readFile("two.txt", "utf-8", (err, data)=>{
    if(err) throw err;
    console.log(data)
})


// Reading JSON file

fs.readFile("emp.json", "utf-8", (err, data)=>{
    if(err) throw err;
    let stdData= JSON.parse(data)
    console.log(stdData)
})


fs.readFile("student.json", "utf-8", (err, data)=>{
    if(err) throw err;
    let empData = JSON.parse(data)
    console.log(empData)
})