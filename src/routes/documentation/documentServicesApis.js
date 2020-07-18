exports.updateCustomer = {
    description: 'Update the User Profile',
    tags: ["Customer"],
    summary: 'Update',
    query:{
        "type": "object",
        "properties": {
            "customerId": {
                "type": "string"
            },
    
        },
        "required": [
            "customerId"
        ]
    },
    body: {
        "type": "object",
        "properties": {
            "userName": {
                "type": "string"
            },
            "mobileNo": {
                "type": "string"
            },
            "email": {
                "type": "string"
            },
            "password": {
                "type": "string"
            },
            "otpVerified": {
                "type": "boolean"
            },
        },
        "required": [
        ]
    },
    response: {
        200: {
            description: 'Successful response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string",
                    "enum": ['failiure', 'success'],
                },
                "message": {
                    "type": "string"
                },
                "data": {
                    "type": "object",
                    "properties": {
                        "customerId":{
                            "type": "string"
                        },
                        "userName": {
                            "type": "string"
                        },
                        "mobileNo": {
                            "type": "string"
                        },
                        "email": {
                            "type": "string"
                        },
                        "password": {
                            "type": "string"
                        },
                        "otpVerified": {
                            "type": "boolean",
                            "default":false
                        },
                        "markForDelete":{
                            "type":"boolean",
                            "default":false
                        },
                        "otp":{
                            "type":"string"
                        },
                        "googleId":{
                            "type":"string"
                        },
                        "faceBookId":{
                            "type":"string"
                        },
                    },
                    "required": [
                        "email",
                        "mobileNo",
                        "customerId",
                        "userName",
                        "password",
                        "otpVerified",
                        "markForDelete"
                    ]

                }
            },
            "required": [
                "status",
                "data"
            ]
        }, 400: {
            "description": 'Error response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string"
                },
                "code": {
                    "type": "integer"
                },
                "errorCause": {
                    "type": "string"
                },
                "message": {
                    "type": "string"
                }
            },
            "required": [
                "status",
                "message",
                "code"
            ]
        },
        500: {
            "description": 'Error response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string"
                },
                "code": {
                    "type": "integer"
                },
                "errorCause": {
                    "type": "string"
                },
                "message": {
                    "type": "string"
                }
            },
            "required": [
                "status",
                "message",
                "code",
                "errorCause"
            ]
        }
    }
}

exports.loginByPassword = {
    description: 'Login With Password',
    tags: ['Authorization and Authentication'],
    summary: 'LOgin',
    body: {
        "type": "object",
        "properties": {
            "password": {
                "type": "string"
            },
            "email": {
                "type": "string"
            },
            "mobileNo": {
                "type": "string"
            },
        },
        "required": [
            "password"
        ]
    },
    response: {
        200: {
            description: 'Successful response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string",
                    "enum": ['failiure', 'success'],
                },
                "message": {
                    "type": "string"
                },
                "data": {
                    "type": "object",
                    "properties": {
                        "customerId":{
                            "type": "string"
                        },
                        "userName": {
                            "type": "string"
                        },
                        "mobileNo": {
                            "type": "string"
                        },
                        "email": {
                            "type": "string"
                        },
                        "otpVerified": {
                            "type": "boolean",
                            "default":false
                        },
                        "markForDelete":{   
                            "type":"boolean",
                            "default":false
                        },
                        "otp":{
                            "type":"string",
                            "default":""
                        
                        },
                        "googleId":{
                            "type":"string"
                        },
                        "faceBookId":{
                            "type":"string"
                        },
                        "token":{
                            "type":"string"
                        }
                    },
                    "required": [
                        "email",
                        "mobileNo",
                        "customerId",
                        "userName",
                        "otpVerified",
                    ]
            }
            },
            "required": [
                "status",
                "data"
            ]
        },
        400: {
            "description": 'Error response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string"
                },
                "code": {
                    "type": "integer"
                },
                "errorCause": {
                    "type": "string"
                },
                "message": {
                    "type": "string"
                }
            },
            "required": [
                "status",
                "message",
                "code"
            ]
        },
        500: {
            "description": 'Error response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string"
                },
                "code": {
                    "type": "integer"
                },
                "errorCause": {
                    "type": "string"
                },
                "message": {
                    "type": "string"
                }
            },
            "required": [
                "status",
                "message",
                "code",
                "errorCause"
            ]
        }
    }
}

exports.verifyOTP = {
    description: 'Verify OTP',
    tags: ['Authorization and Authentication'],
    summary: 'Verify',
    body:{
        "type": "object",
        "properties": {
            "customerId": {
                "type": "string"
            },
            "otp":{
                "type":"string"
            }
    
        },
        "required": [
            "customerId",
            "otp"
        ]
    },
    response: {
        200: {
            description: 'Successful response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string",
                    "enum": ['failiure', 'success'],
                },
                "message": {
                    "type": "string"
                },
                "data": {
                    "type": "object",
                    "properties": {
                        "customerId":{
                            "type": "string"
                        },
                        "userName": {
                            "type": "string"
                        },
                        "mobileNo": {
                            "type": "string"
                        },
                        "email": {
                            "type": "string"
                        },
                        "otpVerified": {
                            "type": "boolean",
                            "default":false
                        },
                        "markForDelete":{   
                            "type":"boolean",
                            "default":false
                        },
                        "otp":{
                            "type":"string",
                            "default":""
                        
                        },
                        "googleId":{
                            "type":"string"
                        },
                        "faceBookId":{
                            "type":"string"
                        },
                        "token":{
                            "type":"string"
                        }
                    },
                    "required": [
                        "email",
                        "mobileNo",
                        "customerId",
                        "userName",
                        "otpVerified",
                    ]
            }
            },
            "required": [
                "status",
                "data"
            ]
        },
        400: {
            "description": 'Error response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string"
                },
                "code": {
                    "type": "integer"
                },
                "errorCause": {
                    "type": "string"
                },
                "message": {
                    "type": "string"
                }
            },
            "required": [
                "status",
                "message",
                "code"
            ]
        },
        500: {
            "description": 'Error response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string"
                },
                "code": {
                    "type": "integer"
                },
                "errorCause": {
                    "type": "string"
                },
                "message": {
                    "type": "string"
                }
            },
            "required": [
                "status",
                "message",
                "code",
                "errorCause"
            ]
        }
    }
}


exports.customerFeedback = {
    description: 'Give Feedback on Product',
    tags: ['Customer'],
    summary: 'Feedback',
    body: {
        "type": "object",
        "properties": {
            "customerId": {
                "type": "string"
            },
            "productId": {
                "type": "string"
            },
            "rating": {
                "type": "number"
            },
            "feedback":{
                "type":"string"
            }
        },
        "required": [
            "customerId",
            "productId",
            "rating",
        ]
    },
    response: {
        200: {
            description: 'Successful response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string",
                    "enum": ['failiure', 'success'],
                },
                "message": {
                    "type": "string"
                },
                "data": {
                    "type": "object",
                    "properties": {
                        "customerId": {
                            "type": "string"
                        },
                        "productId": {
                            "type": "string"
                        },
                        "rating": {
                            "type": "number"
                        },
                        "feedback":{
                            "type":"string"
                        }
                    },
                    "required": [
                        "customerId",
                        "productId",
                        "rating",
                    ]
            }
            },
            "required": [
                "status",
                "data"
            ]
        },
        400: {
            "description": 'Error response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string"
                },
                "code": {
                    "type": "integer"
                },
                "errorCause": {
                    "type": "string"
                },
                "message": {
                    "type": "string"
                }
            },
            "required": [
                "status",
                "message",
                "code"
            ]
        },
        500: {
            "description": 'Error response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string"
                },
                "code": {
                    "type": "integer"
                },
                "errorCause": {
                    "type": "string"
                },
                "message": {
                    "type": "string"
                }
            },
            "required": [
                "status",
                "message",
                "code",
                "errorCause"
            ]
        }
    }
}
