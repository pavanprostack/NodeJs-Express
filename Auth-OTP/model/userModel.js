// Step : 3:-

import mongoose from "mongoose";
import jwt from 'jsonwebtoken'


const userSchema = new mongoose.Schema({
    number: {
        type: String,
        require: true
    },
}, { timestamps: true });          // timestamps gives time and date.

userSchema.methods.generateJWT = function () {
    const token = jwt.sign({
        id: this._id,
        number: this.number
    }, process.env.JWT_SECRET_KEY, { expiresIn: "7d" })
    return token
}

const UserModel = mongoose.model("user", userSchema);

export default UserModel