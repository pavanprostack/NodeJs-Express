import express from 'express'
import morgan from 'morgan'
// import chalk from 'chalk'

const app = express();

app.use(morgan('tiny'));

app.get("/", (req, res)=>{
    res.send("This is nodejs ES6 Practice using 'babel' or 'type':'module' ")
})

app.listen(8090, (err)=>{
    if(err) throw err
    console.log(`Server is running on...http://localhost:${8090}`)
    // console.log(`${chalk.blue(`Server is running on...http://localhost:${8090}`)}`)
})