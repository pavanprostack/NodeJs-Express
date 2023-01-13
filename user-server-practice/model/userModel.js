import mongoose from 'mongoose';

let userSchema = new mongoose.Schema({
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
    created:{
        type:Date,
        default:Date.now
    }
})

let UserModel = mongoose.model('user', userSchema);

export default UserModel