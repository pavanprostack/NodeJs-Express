import express, { urlencoded } from 'express'
import morgan from 'morgan'
import chalk from 'chalk'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import productRouter from './router/productRouter.js'

const app = express();

dotenv.config({ path: "./config/config.env" });

let port = process.env.PORT;
let hostname = process.env.HOST_NAME;

app.use(morgan('tiny'))

app.use(cors());

//How To Read Form Data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//create route request
app.get("/", (request, response)=>{
    response.send("<h1>This is Nodejs Express App Connecting With MongoDB</h1>")
});


//configure product routes
app.use("/product", productRouter);


// Connecting To MongoDB
const mongo_url = process.env.MONGO_DB_LOCAL_URL
mongoose.connect(mongo_url)
    .then((response) => {
        console.log(chalk.cyanBright(`${`Mongo DB - Connection Successfull!`}`))
    })
    .catch((err) => {
        console.log(err)
        process.exit(1)
    })

app.listen(port,hostname,()=>{
    console.log(chalk.magentaBright(`${`Server is running on.....http://${hostname}:${port}`}`))
})
