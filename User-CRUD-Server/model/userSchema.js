import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    isAdmin: {
        type: String,
        require: true
    },
    created: {
        type: Date,
        default: Date.now
    }
})

const UserModel = mongoose.model('user', userSchema);
export default UserModel