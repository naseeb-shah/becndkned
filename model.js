 const mongoose= require("mongoose")

 var  todoschme= mongoose.Schema


 const Schema=new todoschme({
    name:String,
    price:Number,
time : { type: Number, default: (new Date()).getTime() } 
 })

  const product=mongoose.model('product',Schema)
  module.exports=product