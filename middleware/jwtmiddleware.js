const jwt = require('jsonwebtoken')

exports.jwtMiddleWare = async(req,res,next) => {
    let token = req.headers.authorization.split(' ')[1]

        try{
            if(token){
                let decodedToken = jwt.verify(token,process.env.jwt_key)
                    if(decodedToken){
                        req.user = decodedToken.email
                        next()
                    }else{
                        res.status(401).json({message:"Invalid Token"})
                    }
                
            }else{
                res.status(401).json({message:"Invalid Token Please Login"})
            }
        }catch(err){
            res.status(500).json({message:"Server Error"})
        }
        
 
}