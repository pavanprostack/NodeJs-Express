import express from 'express'
import morgan from 'morgan'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import chalk from 'chalk'

const app = express();

dotenv.config({path:"./config/config.env"})
const port = process.env.PORT;
const hostname = process.env.HOST_NAME


app.get("/", (req, res)=>{
    res.send("<h1>Iam Creating User Module Server</h1>")
})

app.listen(port, hostname, ()=>{
    console.log(chalk.magentaBright(`Express Server is running on http://${hostname}:${port}`))
})