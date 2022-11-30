import express from 'express'
const router = express.Router()

/* router.get(); */
/*
    URL:localhost:7000/product/create
    Method:POST
    Fields:name, price, qty
*/

router.post("/create", async (request, response) => {
    try {
        //read data from form/post man 
        let product = {
            name: request.body.name,
            price: request.body.price,
            qty: request.body.qty
        }
        await response.send(product)
            console.log(product)
    }
    catch (err) { }
});

/* router.put();
router.delete() */

export default router