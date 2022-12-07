import express, { response } from 'express'
import UserModel from '../model/userSchema.js';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

let router = express.Router();

/*
 API URL: http://127.1.0.7:7000/user/register
 Method: POST
 Req Fields: name, email, password
 Access Type: public
*/

// Registration
router.post("/register", async (req, res) => {
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
        let salt = await bcrypt.genSaltSync(10);
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
    }
    catch (err) {
        res.status(500).json({
            msg: err.message
        })
    }
})



/*
 API URL: http://127.1.0.7:7000/user/login
 Method: POST
 Req Fields: email, password
 Access Type: public
*/

// Login
router.post("/login", async (req, res) => {
    try {
        let { email, password } = req.body;
        let user = await UserModel.findOne({ email: email });
        console.log(user)
        if (!user) {
            res.status(401).json({
                error: "User not Registered"
            })
        }

        // Verify the password
        let flag = await bcrypt.compareSync(password, user.password)
        if (!flag) {
            return res.status(404).json({
                error: "Wrong Password"
            })
        }

        //if user email is exists and password matches then generate JWT Token
        //payload - what basis we are generating token?
        let payload = {
            id: user.id,
            name: user.name
        }
        let secretkey = process.env.SECRET_KEY
        //generate JWT token
        jwt.sign(payload, secretkey, {expiresIn:30000}, (err, token) => {
            if (err) throw err
            res.status(200).json({
                Status: "Login Successfull",
                token: token
            })
        })
    }
    catch (err) { }
})

export default router