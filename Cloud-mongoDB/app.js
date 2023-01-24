import express from 'express';
import mongoose from 'mongoose';

const database = `mongodb+srv://pavan107:Pavan%40107@cloud-database.nnpecqn.mongodb.net/test?retryWrites=true&w=majority`

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World")
})

mongoose.set('strictQuery', false);

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(database, connectionParams)
.then((response)=>{
    console.log(`Mongo DB - Connected`)
}).catch((err)=>{
    console.log(err);
    process.exit(1);
})

app.listen(5000, () => {
    console.log(`Server is running on http://localhost:5000`)
})