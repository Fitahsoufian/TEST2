const jwt = require("jsonwebtoken")


module.exports = (req,res,next)=>{
const token = req.header('x-auth-token')

if (!token) {
 return res.status(404).send("access reject...")
}
try{
const decodeToken = jwt.verify(token,'privateky')
req.user = decodeToken;
next()
}catch(err){
 return res.status(404).send("wrong token...")

}

}