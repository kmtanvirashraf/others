const mongoose=require('mongoose');
//skappa vi schema
const userSchema=mongoose.Schema({
   firstName: {
    type:String,
    unique:true},
   lastName: String,
   email:String,
   admin:{
       type:Boolean,
       default:false
   }
});

module.exports=mongoose.model('User',userSchema);