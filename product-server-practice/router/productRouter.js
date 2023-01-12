import express from 'express';
import { set } from 'mongoose';
import ProductModel from '../model/Product.js'
const router = express.Router();

// get all products
router.get("/all", async (req, res) => {
    try {
        let products = await ProductModel.find();
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({
            msg: error.message
        })
    }
})


// create product
router.post("/create", async (req, res) => {
    try {
        let new_Product = {
            name: req.body.name,
            price: req.body.price,
            image: req.body.image,
            qty: req.body.qty,
            info: req.body.info
        }

        let verifyProduct = await ProductModel.findOne({ name: new_Product.name });
        if (verifyProduct) {
            return res.status(401).json({
                result: "Product already exists!"
            })
        }

        let product = await ProductModel(new_Product);
        let saveProduct = await product.save();
        res.status(200).json({
            result: "Product Created Successfully.",
            productDetails: product
        })
    } catch (error) {

    }
});


// get single product
router.get("/:id", async (req, res) => {
    try {
        let product_Id = req.params.id
        let product = await ProductModel.findById(product_Id)

        res.status(200).json({
            result: "Single Product",
            productDetails: product
        })
    } catch (error) {
        res.status(500).json({
            msg: error.message
        })
    }
})

// update product
router.put("/:id", async (req, res) => {
    try {
        let product_Id = req.params.id
    let updatedProduct = {
        name: req.body.name,
        price: req.body.price,
        image: req.body.image,
        qty: req.body.qty,
        info: req.body.info
    }

    let product = await ProductModel.findById(product_Id);
    if (!product) {
        return res.status(401).json({
            result: "Product not exists!"
        })
    }

    let updateProduct = await ProductModel.findByIdAndUpdate(product_Id, { $set: updatedProduct }, { new: true })
    res.status(200).json({
        result: "Updated Successfully",
        productDetails: updateProduct
    })
    } catch (error) {
        res.status(500).json({
            msg:error.message
        })
    }
    
})

// delete product
router.delete("/:id", async (req, res)=>{
    try {
        let product_Id=req.params.id;
        let product= await ProductModel.findById(product_Id);
        if (!product) {
            return res.status(401).json({
                result: "Product not exists!"
            })
        }

        let delProduct= await ProductModel.findByIdAndDelete(product_Id);
        res.status(200).json({
            result:"Product deleted successfully",
            productDetails: delProduct
        })

    } catch (error) {
        res.status(500).json({
            msg:error.message
        })
    }
})



export default router