const express=require('express')
const router=express.Router()
const panier=require('../models/panier')
const { body, validationResult } = require('express-validator');
const authMiddleware =require('../helpers/authMiddleware')

router.post('/',authMiddleware,(req,res)=>{
    
    panier.find({id:req.client.clientId})
    .then(doc=>{
        if(!doc.length){
            let newp = new panier({
                id:req.client.clientId
            })
                
            newp.save()
           return res.status(200).json(newp)
        }
    })
   
})




router.put('/updatePanier',authMiddleware,(req,res)=>{
    
   panier.findOneAndUpdate({id:req.client.clientId},
         {$push:{product:req.body}})
    .then(doc=>res.status(200).json(doc))
    .catch((err)=>{
        console.error(err.message);
        res.status(500).send([{msg:"server ERROR"}])
      })
})





router.put('/updateProduct',authMiddleware,(req,res)=>{
    panier.updateOne(
        { id: req.client.clientId , "product._id": req.body.id},
        { $set: { "product.$.amount" :req.body.amount } }
     )
     
     .then(()=>{
         panier.find({id:req.client.clientId})
         .then(doc=>{
            res.status(200).send(doc[0].product)
         })
         .catch((err)=>{
            console.error(err.message);
            res.status(500).send([{msg:"server ERROR"}])
          })
         
     })
     .catch((err)=>{
        console.error(err.message);
        res.status(500).send([{msg:"server ERROR"}])
      })
})




router.delete('/',authMiddleware,(req,res)=>{
    

   

    panier.update(
            { },
            { $pull: { product: { _id:req.body.id } } },
            { multi: true }      
    )

    .then(el=>{
        res.status(200).send(el)
    })
    .catch((err)=>{
        console.error(err.message);
        res.status(500).send([{msg:"server ERROR"}])
      })
     
})




    
router.get('/',authMiddleware,(req,res)=>{
    panier.find({id:req.client.clientId})
    .then((data)=>{
    if(!data){
        res.status(400).json( "product not found")
    }
    res.status(200).json(data[0].product)
}
    )
    .catch((err)=>{
        console.error(err.message);
        res.status(500).send([{msg:"server ERROR"}])
      })
})





module.exports=router