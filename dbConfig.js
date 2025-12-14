const mongoose = require('mongoose')

mongoose.connect(process.env.Mongo_db).then((res) => {
    console.log("MongoDB Connected")
}).catch((err) => {
    console.log("DB connection Failed",err)
})