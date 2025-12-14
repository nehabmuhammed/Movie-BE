const express = require('express')
const router = express.Router()
const chatController  = require('./controller/chatController')
const authController = require('./controller/authController')
const { jwtMiddleWare } = require('./middleware/jwtmiddleware')

router.post('/getResponse', jwtMiddleWare,chatController.handleChat)
router.post('/registerUser',authController.userRegister)
router.post('/loginUser',authController.loginUser)

module.exports = router