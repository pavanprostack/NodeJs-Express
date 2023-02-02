const generateOTP = require('./otpGenerator');
const sendOTP = (mobileNumber) => {
  const otp = generateOTP();
  // Send the OTP to the mobile number
  // Here, you can use third party APIs like Twilio, etc
  return `OTP sent to ${mobileNumber} is ${otp}`;
};

module.exports = sendOTP;