// Create product schema
import mongoose from "mongoose";

let productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    qty: {
        type: Number,
        required: true
    }
});

let ProductModel = mongoose.model('product', productSchema);
export default ProductModel