
const config = require('../config/index')

const addProductToCart = async (fastify,addProductToCartRequest) => {
    try{
        let product = await  fastify.axios.post("http://localhost:3006/addProductsToCart",addProductToCartRequest.body)
        console.log(product.data.data)
        return product.data.data
    }catch(e){
        console.log(e.response.data.errorCause)
        return{
            error:e.response.data.errorCause
        }
    }
}

const removeProductFromCart = async (fastify,removeProductFromCart) => {
    try{
        console.log(removeProductFromCart)
        let removeProduct = await  fastify.axios.post("http://localhost:3006/removeProductFromCart",removeProductFromCart)
        console.log(removeProduct.data.data)
        return removeProduct.data.data
    }catch(e){
        console.log(e.response.data.errorCause)
        return{
            error:e.response.data.errorCause
        }
    }
}

const emptyProductsOfCart = async (fastify,emptyProductOfCartRequest) => {
    try{
        console.log(emptyProductOfCartRequest)
        let product = await  fastify.axios.post("http://localhost:3006/emptyProductsFromCart?customerId="+emptyProductOfCartRequest.customerId)
        console.log(product.data.data)
        return product.data.data
    }catch(e){
        console.log(e.response.data.errorCause)
        return{
            error:e.response.data.errorCause
        }
    }
}
const getProductsOfCart  = async (fastify,getProductsOfCartRequest) => {
    try{
        console.log(getProductsOfCartRequest)
        let products = await  fastify.axios.post("http://localhost:3006/getProductsOfCart?customerId="+getProductsOfCartRequest.customerId)
        console.log(products.data.data)
        return products.data.data
    }catch(e){
        console.log(e.response.data.errorCause)
        return{
            error:e.response.data.errorCause
        }
    }
}




module.exports = {
    addProductToCart,
    removeProductFromCart,
    emptyProductsOfCart,
    getProductsOfCart

}