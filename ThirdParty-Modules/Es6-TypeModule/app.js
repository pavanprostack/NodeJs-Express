import express from 'express'
import morgan from 'morgan'
import chalk from 'chalk'

const app = express();

app.use(morgan('tiny'))

app.get("/", (req, res)=>{
    res.send("This is Creates Server Using Es6 & 'type' : 'module' in package.json")
})

let hostname = "127.0.0.1"

app.listen(8077,hostname,  (err)=>{
    if(err) throw err
    // console.log(`Server is running on...http://localhost:${8077}`)
    console.log(`${chalk.magentaBright(`Server is running on...http://${hostname}:${8077}`)}`)
})