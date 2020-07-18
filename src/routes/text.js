

// async function Router(fastify){
//     fastify.post('/routerDemo',{
//         preValidation:[fastify.jwtauthentication]
//     }   , async (req,res)=>{
//             const token = req.headers.authorization.replace('Bearer ','')

//         const decodedToken = fastify.jwt.decode(token)
//         res.status(200).send({msg:"Successfully authenticated !!",
//                         body:req.body,
//                     encypt:decodedToken})
//     })
// }



// module.exports = Router