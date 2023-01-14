// step : 4:-

import mongoose from "mongoose";

const otpSchema=mongoose.Schema({
    number:{
        type:String,
        require:true
    }, 
    otp:{
        type:String,
        require:true
    },
    createdAt:{
        type:Date,
        default:Date.now,
        index:{expires:300}  // after 5min it will deleted automatically from database. 
    }
}, {timestamps:true});

const OtpModel=mongoose.model("otp", otpSchema);

export default OtpModel