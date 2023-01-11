import express, { request } from "express"
import cors from "cors"
import dotenv from "dotenv"

const app = express();

app.use(cors());
app.use(express.json());

let products = [
   {
    id: 1,
    name: "vivo"
   },
   {
    id:2,
    name:"samsung"
   },
   {
    id:3,
    name:"oppo"
   }
]

app.get("/products", (req, res)=>{
    res.send(products);
})

app.get("/products/:id", (req, res)=>{
   const filteredProduct= products.filter((product)=>product.id.toString()===req.params.id)
   res.send(filteredProduct)
})

app.post("/addProducts", (req, res)=>{
    const {id, name}=req.body
    console.log(id, name)
    res.send("Data Stored!")
})

app.get("/", (req, res) => {
    res.send("Hi, Node Js")
})

app.listen(5000, (err) => {
    if (err) throw err;
    console.log("Server is running on http://localhost:5000")
})