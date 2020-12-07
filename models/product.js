const monngoose=require('mongoose')

const productSchema=monngoose.Schema({
    url:String,
    name:String,
    category:String,
    amount:Number,
    price:Number
})


module.exports=monngoose.model('product',productSchema)