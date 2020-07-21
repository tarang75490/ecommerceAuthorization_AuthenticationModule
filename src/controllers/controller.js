const service = require('../services/services')
const cartService = require('../services/authenticationToCart')
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
        if(response === "Not Found"){
            res.code(400)
                throw new HttpError('faliure', 22005,"Falied To update")
        }
        return res.status(200).send({
            status: 'success',
            data: response
        })
    } catch (e) {
        res.code(500)
        throw new HttpError('faliure', 2001, "Update Customer Failed", e.message)
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

exports.addProductToCart = async (req, res) => {
    try {
        console.log(req.body)
        let response = await cartService.addProductToCart(req.fastify, req.body)
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
        throw new HttpError('faliure', 2001, "Add Product to Cart request failed", e.message)
    }
}

exports.removeProductFromCart = async (req, res) => {
    try {
        console.log(req.body)
        let response = await cartService.removeProductFromCart(req.fastify, req.body)
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
        throw new HttpError('faliure', 2001, "Remove Product to Cart request failed", e.message)
    }
}


exports.emptyProductsOfCart = async (req, res) => {
    try {
        console.log(req.body)
        let response = await cartService.emptyProductsOfCart(req.fastify, req.query)
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
        throw new HttpError('faliure', 2001, "Empty Products of Cart request failed", e.message)
    }
}

exports.getProductsOfCart = async (req, res) => {
    try {
        console.log(req.body)
        let response = await cartService.getProductsOfCart(req.fastify, req.query)
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
        throw new HttpError('faliure', 2001, "Get Product to Cart request failed", e.message)
    }
}


