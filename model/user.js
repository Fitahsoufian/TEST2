const mongoose = require("mongoose")
const joi = require('joi')
const jwt = require("jsonwebtoken")


const userSchema =  new mongoose.Schema({
 name: { type: String, required: true, minlength:3, maxlength:255 },
 email: { type: String, required: true,unique:true, minlength:3, maxlength:255 },
 password: { type: String, required: true,minlength:8, maxlength:1024},
 isAdmin: Boolean 
})
userSchema.methods.generateToken = function(){

 const token = jwt.sign({_id:this._id, isAdmin:this.isAdmin}, 'privateky')
return token
}
const User = mongoose.model("User",userSchema);

 const userValidate = (user)=>{
  const schema = joi.object({
   name:joi.string().min(3).required(),
   email:joi.string().min(4).required().email(),
   password:joi.string().min(6).required()
});
 return schema.validate(user)
}

exports.User=User
exports.userValidate = userValidate