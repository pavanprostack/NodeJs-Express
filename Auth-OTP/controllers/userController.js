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

    const otp = new OtpModel({ number: number, otp: OTP });
    const salt = await bcrypt.genSalt(10);
    otp.otp = await bcrypt.hash(otp.otp, salt);

    const result = await otp.save();
    return res.status(200).send("Otp sent successfully!");
}

const verifyOtp = async (req, res) => {
    const otpHolder = await OtpModel.find({
        number: req.body.number
    })

    if (otpHolder.length === 0) {
        return res.status(400).send("You used an expired OTP!")
    }

    const recentOtp = otpHolder[otpHolder.length - 1]  // it finds the last otp from array.
    const validUser = await bcrypt.compare(req.body.otp, recentOtp.otp);

    if (recentOtp.number === req.body.number && validUser) {
        const user = new UserModel(_.pick(req.body, ["number"]));
        const token = user.generateJWT();

        const result = await user.save();
        const otpDelete = await OtpModel.deleteMany({
            number: recentOtp.number
        });

        return res.status(200).send({
            message: "User Registration Successfull!",
            token: token,
            data: result
        })
    } else {
        return res.status(400).send("Your OTP Was Wrong")
    }
}

export { signUp, verifyOtp }