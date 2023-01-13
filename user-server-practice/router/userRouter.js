import express, { response } from 'express'
import UserModel from '../model/userModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const router = express.Router();

router.post('register', async (req, res) => {
    try {
        let { name, email, password } = req.body
        console.log(name);
        let userResult = await UserModel.findOne({ email: email });
        if (userResult) {
            return res.status(401).json({
                Status: "User already exists"
            })
        }
        //hash the password or encode the password
        let salt = bcrypt.genSaltSync(10);
        password = await bcrypt.hash(password, salt)
        console.log(password);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       

        // userdata connecting with Schema
        let user = new UserModel({ name, email, password })
        console.log(user)
        let userSave = await user.save(); // store into database
        res.status(200).json({
            Status: "Registered Successfully",
            userDetails: user
        })
    } catch (error) {
        res.status(500).json({
            msg: error.message
        })
    }
})

export default router