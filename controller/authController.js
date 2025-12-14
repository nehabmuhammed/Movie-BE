const userModel = require('../models/userModel')
const jwt = require('jsonwebtoken')

exports.userRegister = async(req,res) => {
    let {userName,email,password} = req.body

  try{
      if(userName && email && password ){
        let existingUser = await userModel.findOne({email:email})

        if(existingUser){
            res.status(409).json({message:"User Already Registers"})
        }
        let newuser = new userModel({userName,email,password});
        await newuser.save()
        res.status(201).json({message:"User Registerd"})

    }else{
        res.status(400).json({message:"Fill the fields"})
    }
  }catch(err){
        res.status(500).json({message:"Server issue",err})
        console.log(err)
  }

}

exports.loginUser = async(req,res) => {
    try{
        let {email,password} = req.body

        let existingUser = await userModel.findOne({email:email})

        if(existingUser){
            if(existingUser.password == password){

                let payload = {
                    email:existingUser.userName,
                    password:existingUser.password
                }

                let token = jwt.sign(payload,process.env.jwt_key)
                res.status(200).json({message:"Login Successfull",token})

            }else{
                res.status(400).json({message:"Cant Generate Token"})
            }
        }else{
            res.status(400).json({message:"User Not registerd"})
        }

    }catch(err){
        console.log(err)
        res.status(500).json({message:"Server side Error"})

    }
}