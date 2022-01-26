const express = require('express')
const {User, userValidate} = require("../model/user")
const bcrypt = require("bcryptjs")
const _ =require('lodash');



const singUp = async(req,res) => {
 const{error} = userValidate(req.body)
 if(error){
return res.status(404).send(error.details[0].message);
 }
 let user = await User.findOne({email: req.body.email})
 if(user){
  res.status(404).send('User found in database')
 }
  user= new User(_.pick(req.body,['name','email','password']));
  const saltRounds=10
  const salt = await bcrypt.genSalt(saltRounds)
  user.password = await bcrypt.hash(user.password, salt)
 await user.save();
 const token = user.generateToken()
 res.header("x-auth-token",token).send(_.pick(user,['_id', 'name','email']));
}


function validate(req){
 const schema = joi.object({
  email:joi.string().min(4).required().email(),
  password:joi.string().min(6).required()
});
return schema.validate(req)
}
module.exports=singUp