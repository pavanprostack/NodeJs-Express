import express from 'express'
import morgan from 'morgan'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import chalk from 'chalk'
import cors from 'cors'
import bodyParser from 'body-parser'
import userRouter from './router/userRouter.js'

const app = express();

dotenv.config({ path: "./config/config.env" })
const port = process.env.PORT;
const hostname = process.env.HOST_NAME

app.get("/", (req, res) => {
    res.send("<h1>Iam Creating User Module Server</h1>");
})


app.use(cors());
app.use(morgan('tiny'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb' }, { extended: false }));

app.use("/user", userRouter);

const mongo_Url = process.env.MONGO_DB_LOCAL_URL

mongoose.set('strictQuery', false)
mongoose.connect(mongo_Url, {useNewUrlParser:true})
    .then((response) => {
        console.log(chalk.blueBright(`Mongo DB - Connected Successfully`))
    }).catch((err) => {
        console.log(err);
        process.exit(1);
    })

app.listen(port, hostname, () => {
    console.log(chalk.magentaBright(`Express Server is running on http://${hostname}:${port}`))
})