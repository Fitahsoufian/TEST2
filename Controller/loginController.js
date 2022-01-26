const {User} = require("../model/user")
const bcrypt = require("bcryptjs")
const joi = require('joi');



const login = async(req,res) => {
 const{error} = validate(req.body)
 if(error){
return res.status(404).send(error.details[0].message);
 }
 let user = await User.findOne({email: req.body.email})
 if(!user){
  res.status(404).send('Invalid email or password')
 }
  
 const checkPassword = await bcrypt.compare(req.body.password, user.password)
 // await user.save();
 if(!checkPassword){
  res.status(404).send('Invalid email or password')
 }
 const token = user.generateToken()
 res.send(token);
}


function validate(req){
 const schema = joi.object({
  email:joi.string().min(4).required().email(),
  password:joi.string().min(6).required()
});
return schema.validate(req)
}
module.exports=login