const mongoose = require("mongoose");

const panierSchema = mongoose.Schema({
  id: mongoose.ObjectId,
  product:[
    {
      url:String,
      name:String,
      price:String,
      amount: { type: Number, default: 1 }
    }
  ]
 
});

module.exports = mongoose.model("panier", panierSchema);
