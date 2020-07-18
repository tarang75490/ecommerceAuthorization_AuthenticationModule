const controllers = require('../controllers/controller')
const validators = require('../validators/validators')

// Import Swagger documentation
const documentation = require('./documentation/documentServicesApis')
const routes = [
    {
        method: "POST",
        url: "/loginWithPassword",
        handler: controllers.loginByPassword,
        schema: documentation.loginByPassword,
        preValidation: validators.validateLoginWithPassword
    },
    {
        method: "POST",
        url: "/verifyOTP",
        handler: controllers.verifyOTP,
        schema: documentation.verifyOTP,
        preValidation: validators.validateVerifyOTP
    },
    {
        method:"POST",
        url:"/updateCustomer",
        preValidation:validators.validatetoken,
        handler:controllers.updateCustomer,
        schema: documentation.updateCustomer,
    },
    {
        method:"POST",
        url:"/customerFeedback",
        preValidation:validators.validatetoken,
        handler:controllers.customerFeedback,
        schema: documentation.customerFeedback,
    }

]



module.exports = routes