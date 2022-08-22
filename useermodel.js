const mongoose= require("mongoose")

var  todoschme= mongoose.Schema


const Schema=new todoschme({
    
        id: Number,
        full_name: String,
        age: Number,
        gender: String,
        balance: Number,
        native: String,
        relocate_to: String,
        family_members: Number
      

})

 const user=mongoose.model('user',Schema)
 module.exports=user