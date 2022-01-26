
module.exports = (req,res,next)=>{

if (!req.user.isAdmin) {
 return res.status(403).send("you're not admin...")
}
next()



}