const mongoose=require('mongoose')

const clientSchema= mongoose.Schema({
    firtsName:String,
    lastName:String,
    email:String,
    password:String,
    phone:String,
    role:{type:String , default:"client"},


})

module.exports=mongoose.model('client',clientSchema)