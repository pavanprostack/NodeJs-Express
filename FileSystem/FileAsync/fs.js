const fs = require('fs')


// Writing

fs.writeFile("one.txt", "This is Async Method", "utf-8", (err)=>{
    if(err) throw err
})



// 