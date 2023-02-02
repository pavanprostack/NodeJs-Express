const sendOTP = require('./sendOTP');

const mobileNumber = '7981604405';
const response = sendOTP(mobileNumber);
console.log(response);