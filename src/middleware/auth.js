// const jwt = require('jsonwebtoken')
// const User = require('../models/User.js')


// const auth = async (req,res,next) =>{
//     try{
//     const token = req.header('Authorization').replace('Bearer ','')
//     const decode =  jwt.verify(token,process.env.JWT_SECRET)
//     const user = await User.findOne({_id : decode._id ,'tokens.token':token})

//     if(!user){
//         throw Error("user doesn't Exits")
//     }

//     req.user = user
//     req.token = token

//     next()
//     }catch(e){
//         res.status(401).send( {error: 'Please Authenticate'})
//     }
// }


// module.exports = auth




const fp = require('fastify-plugin');

module.exports = fp(async (fastify) => {
  fastify.decorate('authenticate', async (req, res) => {
    try {
      await req.jwtVerify();
    } catch (err) {
      res.send(err);
    }
  });
});