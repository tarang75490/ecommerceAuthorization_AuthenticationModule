// const jwt = require('jsonwebtoken')
// const User = require('../models/User.js')


// const auth = async (req,res,next) =>{
//     try{
//     const token = req.header('Authorization').replace('Bearer ','')
//      
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




const fastifyPlugins = require('fastify-plugin');

module.exports = fastifyPlugins(async (fastify) => {
  fastify.decorate('jwtauthentication', async (req, res) => {
    try {
      console.log("1212")
      console.log("verification")
      await req.jwtVerify();
      const token = req.headers.authorization.replace('Bearer ','')
      const decodedToken = fastify.jwt.decode(token)
      res.status(200).send({msg:"Successfully authenticated !!",
                        body:req.body,
                      encypt:decodedToken})
    } catch (err) {
      console.log(err)
      res.send(err);
    }
  });
});