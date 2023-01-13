import express, { response } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose'
import chalk from 'chalk'
import userRouter from './router/userRouter.js'

const app = express();

dotenv.config({ path: "config/config.env" });

let port = process.env.PORT;
let hostname = process.env.HOST_NAME;

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json({limit:"100mb"}));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res)=>{
    res.send("This is user practice server creation")
})

app.use('/user', userRouter)

let mongo_URL = process.env.MONGO_DB_URL;

mongoose.set('strictQuery', false);
mongoose.connect(mongo_URL, { useNewUrlParser: true })
    .then((response) => {
        console.log(chalk.blueBright(`${`Mongo DB - Connected Successfully `}`))
    }).catch((err) => {
        console.log(err);
        process.exit(1);
    })

app.listen(port, () => {
    console.log(chalk.magentaBright(`${`Server is running on http://localhost:${port}`}`));
})