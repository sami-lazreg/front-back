const express=require('express')
const router=express.Router()
const product=require('../models/product')
const authMeddleware=require('../helpers/authMiddleware')
const { body, validationResult } = require('express-validator');

router.post('/',authMeddleware,
[
    body("url", "url must not empty").notEmpty,
    body("name", "Name must contain only alphabetic").isAlpha(),
    body("category", "please enter a valid Eamail").notEmpty,
    body("amount", "password length allowed is 5 characters").isNumeric(),
    body("price", "phone must contain only number").isNumeric(),
  ],
(req,res)=>{
    if(req.client.role !=="admin"){
        return res.json('you are not authorized to add a new product')
    }
    
    let newProduct = new product(req.body)
    newProduct.save()
    res.send(newProduct)
})

router.get('/',(req,res)=>{
    product.find({})
    .then((data)=>{
    if(!data){
        res.status(400).json( "product not found")
    }
    res.status(200).json(data)
}
    )
    .catch((err)=>{
        console.error(err.message);
        res.status(500).send([{msg:"server ERROR"}])
      })
})





module.exports=router