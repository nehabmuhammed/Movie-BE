const { getApiResponse } = require("../services/aiServices");

exports.handleChat = async(req,res) =>{
    try{
        const {message} = req.body
        const reply = await getApiResponse(message)
        console.log(reply)
        res.status(200).json({message:reply})
    }catch(err){
        console.log(err)
        res.status(500).json({message:"Server is dead"})
    }
} 