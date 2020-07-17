const Customer = require("../models/Customers")
const Collection = require("../models/Collection")
const Feedback = require('../models/Feedback')
const jwt = require('jsonwebtoken')
const config = require('../config/index')
const generate_token = async (customer) => {
    
    const token = jwt.sign({_id : customer._id.toString()},config.privateKey,{expiresIn:'7 days'})
    
    console.log(token)

    const data = jwt.verify(token,'thisismyprivatekey')
    console.log(data)
    return token

}




const signUpWithPassword = async (fastify,signUpRequest)=>{
    console.log(signUpRequest)
    let customer =  await Customer.findOne({email:signUpRequest.email})
    let customer1 = await Customer.findOne({mobileNo:signUpRequest.mobileNo})
    if(customer || customer1){
        return{
            error :"Email Id  or Phone Already Used"
        }
    }
    
    let collection = await Collection.findOne({})
    if (!collection){
        collection = await new Collection(collection).save()
    }
    collection.noOfCustomers += 1
    

    customer = {
        customerId:"Customer_"+collection.noOfCustomers,
        ...signUpRequest,
        otpVerified:false,
    }
    await new Collection(collection).save()
    await new Customer(customer).save()
    return customer
}




const updateProfile = async (fastify,updateProfileRequest)=>{
    let customer = await getProfile(fastify,updateProfileRequest.query)
    // console.log(updateProfileRequest)
    console.log(customer)
    if(customer.error){
        return customer
    }
    // console.log(updateProfileRequest.body)
    let toUpdateProperties = Object.keys(updateProfileRequest.body)
    // console.log(toUpdateProperties)
    let token;
    toUpdateProperties.forEach(async (property)=>{
        // console.log(updateProfileRequest.body[property])
           
            customer[property] = updateProfileRequest.body[property]
    })
    if (updateProfileRequest.body.otpVerified){
        console.log(customer.tokens)
        console.log(updateProfileRequest.body.otpVerified)
        token = await generate_token(customer)
        customer.tokens = customer.tokens.concat({token})
    }
    console.log(customer)
    customer = await new Customer(customer).save()
    customer = customer._doc
    if(token){
        delete customer.tokens
        console.log(customer)
        customer = {
            ...customer,
            token:token
        }
    }

    return customer
}

const getProfile = async (fastify,getProfileRequest)=>{
    const customer = await Customer.findOne(getProfileRequest)
    if(!customer){
        return{
            error : "Customer Not Found Please Check"
        }
    }

    return await customer
}


const loginByPassword = async (fastify,loginRequest) => {
    let customer = await Customer.findOne(loginRequest)
    if(!customer){
        return {
            error : "Crendential Wrong"
        }
    }
    let token;
    if (customer.otpVerified){
        token = await generate_token(customer)
        customer.tokens = customer.tokens.concat({token})
        customer = await new Customer(customer).save()
        customer = customer._doc
    }
    
    delete customer.password
    if(token){
    delete customer.tokens
    console.log(customer)
    customer = {
        ...customer,
        token:token
    }
}
    console.log(customer)
    return await customer
}




const customerFeedback = async(fastify,feedbackRequest) => {

    const customer = await getProfile(fastify,{customerId:feedbackRequest.customerId})
    console.log(customer)
    if(customer.error){
        return customer
    }


    const feedback = await new Feedback(feedbackRequest).save()
    return feedback


}

module.exports = {
    signUpWithPassword,
    getProfile,
    updateProfile,
    loginByPassword,
    customerFeedback
}