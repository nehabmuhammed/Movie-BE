require("dotenv").config();
require('./dbConfig')
const express = require('express')
const cors = require('cors')
const router = require('./routes')



const server = express()

server.use(cors())
server.use(express.json())
server.use(router)

const port = 3000
server.listen(port,() => {
    console.log("Port running successfully")
})