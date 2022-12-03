import express from 'express'
import ProductModel from '../model/product.js'
const router = express.Router();


router.post("/create", async (request, response) => {
    try {
        let new_Product = {
            name: request.body.name,
            image: request.body.image,
            price: request.body.price,
            qty: request.body.qty,
            info: request.body.info,
        }
        let verifyProduct = await ProductModel.findOne({ name: new_Product.name })
        if (verifyProduct) {
            return response.status(401).json({
                msg: "Product already exists"
            })
        }

        let product = ProductModel(new_Product);
        console.log(product);
        let saveProduct = await product.save();
        response.status(200).json({
            result: "Created Successfully",
            productDetails: product
        })
    }
    catch (err) {
        console.error(err);
        response.status(500).json({
            msg: err.message
        });
    }
})

export default router