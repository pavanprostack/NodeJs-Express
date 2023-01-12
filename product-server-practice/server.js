import express from 'express'
import morgan from 'morgan'
import chalk from 'chalk'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv, { config } from 'dotenv'

const app = express();

dotenv.config({ path: "config/config.env" });

app.use(morgan('tiny'));

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({extended:false}))

let port = process.env.PORT;
let hostname = process.env.HOST_NAME;

app.get("/", (req, res) => {
    res.send("This is product practice server creation")
});

let mongo_URL=process.env.MONGO_DB_LOCAL_URL;

mongoose.set('strictQuery', false);

mongoose.connect(mongo_URL, {useNewUrlParser: true})
.then((response)=>{
    console.log(chalk.blueBright(`${`Mongo DB - Connected Succesfully`}`))
})
.catch((err)=>{
    console.log(err);
    process.exit(1);
})

app.listen(port, hostname,(err)=>{
    if(err) throw err;
    console.log(chalk.magentaBright(`${`Server is running on http://${hostname}:${port}`}`))
})