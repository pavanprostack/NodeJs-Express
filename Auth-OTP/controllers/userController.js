// Step:5:-

import bcrypt from 'bcrypt'
import _ from 'lodash'
import axios from 'axios'
import otpGenerator from 'otp-generator'

import UserModel from '../model/userModel.js'
import OtpModel from '../model/otpModel.js'

const signUp = async (req, res) => {
    const user = await UserModel.findOne({ number: req.body.number });
    if (user) {
        return res.status(400).send("user already registered!");
    }

    const OTP = otpGenerator.generate(6, {
        digits: true,
        lowerCaseAlphabets: false,
        upperCaseAlphabets: false,
        specialChars: false
    });

    const number = req.body.number;
    console.log(OTP);

    const otp=new OtpModel({number:number, OTP});
    otp.otp
}

const verifyOtp = async (req, res) => {

}

export { signUp, verifyOtp }