const mongoose = require ("mongoose")
require("dotenv").config()
const connectDB=()=>{
    mongoose.connect(process.env.mongoUrl,{useNewUrlParser: true,useUnifiedTopology: true})
    .then(()=>console.log("database connected with success"))
    .catch((err)=>console.log("database not connected"))
}
module.exports =connectDB;