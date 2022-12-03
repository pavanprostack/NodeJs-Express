import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import morgan from 'morgan'
import mongoose from 'mongoose'
import chalk from 'chalk'
import productRouter from './router/productRouter.js'

const app = express();

dotenv.config({ path: "./config/config.env" });
const port = process.env.PORT;
const hostname = process.env.HOST_NAME;

app.get("/", (req, res) => {
    res.send("<h1>Grocery App Server</h1>")
})

app.use(morgan('tiny'));
app.use(cors())
app.use("/product", productRouter);

// To read form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

const mongo_Url = process.env.MONGO_URL
mongoose.connect(mongo_Url).then((res)=>{
    console.log(chalk.blue(`Mongo DB - Connected.`))
}).catch((err)=>{
    console.log(err);
    process.exit(1);
})

app.listen(port,hostname,() => {
    console.log(chalk.magentaBright(`Server is running on...http://${hostname}:${port}`))
})