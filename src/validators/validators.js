const HttpError = require('../models/errors/httpError')

const axios = require('axios')
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

const jwt = require('jsonwebtoken')

exports.validatetoken = async function(req,res,done) {
    try {
      const decodedToken = await req.jwtVerify();
      console.log(decodedToken)
      let customer = await  axios.get("http://localhost:3006/getProfile?customerId="+decodedToken.customerId)
        console.log(!customer)
        console.log(customer.data.data.customerId !== req.query.customerId)
        if(!customer){
            res.code(400)
            done(new HttpError('faliure', 20001, 'Not Authorized'))
        }
        // else if (customer.data.data.customerId != req.query.customerId) {
        //     res.code(400)
        //     done(new HttpError('faliure', 20001, 'Not Authorized'))
        // }
        else{
            done()
        }
        
    }catch (err) {
        res.code(401)
        done(new HttpError('faliure', 20001, 'Not Authorized'))
  }
  done()    
}
