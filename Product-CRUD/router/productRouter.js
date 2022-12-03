import express from 'express'
const router = express.Router()
import ProductModel from '../model/product.js'


/*
    URL:127.88.99.77:7000/product/all
    Method:Get
    Fields:Node
*/

// Get All Products
router.get("/all", async (req, res) => {
    try {
        let products = await ProductModel.find();
        res.status(200).json(products)
    }
    catch (err) {
        res.status(500).json({
            msg: err.message
        })
    }
});


/*
    URL:localhost:7000/product/create
    Method:POST
    Fields:name, price, qty
*/

router.post("/create", async (request, response) => {
    try {
        // read data from form/post man 
        let new_Product = {
            name: request.body.name,
            price: request.body.price,
            qty: request.body.qty
        }
        // Product Validation. validation should be do atfter product datails(new_Product)
        const verifyProduct = await ProductModel.findOne({ name: new_Product.name });
        if (verifyProduct) {
            return response.status(401).json({
                msg: "Already existed"
            })
        }
        // we are passing new_product as argument into the productModel
        let product = ProductModel(new_Product)
        console.log(product);
        const saveProduct = await product.save();
        response.status(200).json({
            result: "Created Successfully",
            productDetails: product
        });

    }
    catch (err) { }
});


// Update Product
router.put("/:id", async (req, res) => {
    try {
        let updatedProduct = {
            name: req.body.name,
            price: req.body.price,
            qty: req.body.qty
        }
        let product_Id = req.params.id;
        console.log(product_Id);

        const product = await ProductModel.findById(product_Id);
        if (!product) {
            return res.status(401).json({ msg: "No products found!" })
        }
        let updateProduct = await ProductModel.findByIdAndUpdate(product_Id, { $set: updatedProduct }, { new: true });

        res.status(200).json({
            result: "Updated Successfully",
            productDetails: updateProduct
        })
    }
    catch (err) { }
});

// Delete Product
router.delete("/:id", async (req, res) => {
    try {
        const product_Id = req.params.id;
        const product = await ProductModel.findById(product_Id);
        if (!product) {
            return res.status(401).json({
                result: "No products with that id!"
            })
        }
        const delProduct = await ProductModel.findByIdAndDelete(product_Id);
        res.status(200).json({
            result: "Deleted Successfully",
            product: delProduct
        })
    }
    catch (err) { }

    // router.delete("/all", async (req, res) => {
    //     try {
    //         await ProductModel.remove({});
    //         res.status(200).json({
    //             result: "Deleted All Data Successfully"
    //         })
    //     }
    //     catch (err) { }
    // })
})

export default router