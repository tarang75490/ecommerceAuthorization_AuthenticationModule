const service = require('../services/services')

const HttpError = require('../models/errors/httpError')


exports.loginByPassword= async (req, res) => {
    try {
        let response = await service.loginByPassword(req.fastify, req.body)
        if(response.error){
            res.code(400)
                throw new HttpError('faliure', 22005,response.error)
        }
        return res.status(200).send({
            status: 'success',
            data: response
        })
    } catch (e) {
        res.code(500)
        throw new HttpError('faliure', 2001, "Login Failed", e.message)
    }
}

exports.verifyOTP= async (req, res) => {
    try {
        let response = await service.verifyOTP(req.fastify, req.body)
        if(response.error){
            res.code(400)
                throw new HttpError('faliure', 22005,response.error)
        }
        return res.status(200).send({
            status: 'success',
            data: response
        })
    } catch (e) {
        res.code(500)
        throw new HttpError('faliure', 2001, "Verify OTP failed", e.message)
    }
}




exports.updateCustomer = async (req, res) => {
    try {
        let response = await service.updateCustomer(req.fastify, req)
        console.log()
        if(response.error){
            res.code(400)
                throw new HttpError('faliure', 22005,response.error)
        }
        return res.status(200).send({
            status: 'success',
            data: response
        })
    } catch (e) {
        res.code(500)
        throw new HttpError('faliure', 2001, "Update Customer Failed    ", e.message)
    }
}




exports.customerFeedback = async (req, res) => {
    try {
        console.log(req.body)
        let response = await service.customerFeedback(req.fastify, req.body)
        if(response.error){
            res.code(400)
                throw new HttpError('faliure', 22005,response.error)
        }
        return res.status(200).send({
            status: 'success',
            data: response
        })
    } catch (e) {
        res.code(500)
        throw new HttpError('faliure', 2001, "Customer Feedback Post request failed", e.message)
    }
}


