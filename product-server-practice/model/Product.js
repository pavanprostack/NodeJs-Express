import mongoose from 'mongoose'

let productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    qty: {
        type: Number,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    info: {
        type: String,
        require: true
    },
    created: {
        type: Date,
        default: Date.now
    }
})

let ProductModel=mongoose.model("product", productSchema)

export default ProductModel