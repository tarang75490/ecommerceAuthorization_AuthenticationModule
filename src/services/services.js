const jwt = require('jsonwebtoken')
const config = require('../config/index')


const generate_token =  (customer) => {
    // console.log(customer,123)
    const token = jwt.sign({customerId : customer.customerId},config.privateKey,{expiresIn:'7 days'})
    
    console.log(token,123)

    const data = jwt.verify(token,'thisismyprivatekey')
    console.log(data)

    return token

}

const loginByPassword = async (fastify,loginRequest) => {
    try{
    let customer = await fastify.axios.post("http://localhost:3006/checkCredentials",loginRequest)
    let data = customer.data.data
    // console.log(data)
    let token;
    if (data.otpVerified){
        token = fastify.jwt.sign({
            customerId:data.customerId,
            email:data.email,
            mobileNo:data.mobileNo
        })
        let tokenUpdateRequest = {
            customerId:data.customerId,
            token:token
        }
        console.log(tokenUpdateRequest)
        let customer = await fastify.axios.post("http://localhost:3006/updateToken",tokenUpdateRequest)
        return {
            ... data,
            token:token
        }
    }else{
        return {    
            error : "Otp Not Verified"
        }
    }
    }catch(e){
        return{
            error:e.response.data.errorCause
        }
    }
}

const verifyOTP = async (fastify,verifyRequest)=> {
    try {
    console.log(verifyRequest)
    let customerId = verifyRequest.customerId
    let customer = await  fastify.axios.get("http://localhost:3006/getProfile?customerId="+customerId)
    console.log(customer.data)
    let data= customer.data.data

        if(data.otp !== verifyRequest.otp){
            return{
                error:"Incorrect OTP"
            }  
        }else{  
            token = fastify.jwt.sign({
                customerId:data.customerId,
                email:data.email,
                mobileNo:data.mobileNo
            })
            let tokenUpdateRequest = {
                customerId:data.customerId,
                token:token
            }
            console.log(tokenUpdateRequest)
            let customer = await fastify.axios.post("http://localhost:3006/updateToken",tokenUpdateRequest)
            return {
                ... data,
                token:token
            }
        }            
    }catch(e){
        return{
            error:e.response.data.errorCause
        }  
    }
}



module.exports = {
    loginByPassword,
    verifyOTP
}