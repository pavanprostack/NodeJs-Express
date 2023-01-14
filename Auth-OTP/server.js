// Step : 2:-

// Mondb connection.
import mongoose from "mongoose";
import dotenv from 'dotenv'
import chalk from "chalk";
import app from "./app.js"

dotenv.config({ path: "config/config.env" })

const port = process.env.PORT;

const mongo_URL = process.env.MONGODB_URL_LOCAL;

mongoose.set("strictQuery", false)
mongoose.connect(mongo_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true
}).then((res) => {
    console.log(`Mongo DB - Connected Successfully.`)
}).catch((err) => {
    console.log(`Mongo DB - Connection Failed.`)
})

app.listen(port, () => {
    chalk.magentaBright(`Express Server is running on http://localhost:${port}`)
})