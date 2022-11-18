const fs = require('fs')


// Writing

fs.writeFile("one.txt", "This is Async Method", "utf-8", (err)=>{
    if(err) throw err
})



// Reading
fs.readFile("one.txt", "utf-8", (err, data)=>{
    if(err) throw err
    console.log(data)
})


// Reading JSON file

fs.readFile("json.json", "utf-8", (err, data)=>{
    if(err) throw err
    let jsonData =JSON.parse(data)
    console.log(jsonData)

    fs.writeFile("emp.json", data, "utf-8", (err)=>{
        if(err) throw err
    })
})


fs.readFile("emp.json", "utf8", (err, emp)=>{
    if(err) throw err
    let empData = JSON.parse(emp)
    console.log(empData)
})