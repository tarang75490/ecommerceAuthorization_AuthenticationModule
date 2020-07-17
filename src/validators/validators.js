const HttpError = require('../models/errors/httpError')



exports.validateLoginWithPassword = function (req, res, done) {
    if (!req.body.password ) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'Password Required'))
    }else if (!(req.body.email || req.body.mobileNo)) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'Email or Phone No  is  required'))
    }
    else{
        done()
    }
}



exports.validateVerifyOTP = function (req, res, done) {
    if (!req.body.otp) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'OTP is missing'))
    }else if (!req.body.customerId){
        res.code(400)
        done(new HttpError('faliure', 20001, 'Customer Id is missing'))
    }else{
        done()
    }
}
