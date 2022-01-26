const express = require('express')
const app = express()
const userRouter =require("./routers/sinUpRouter")
const authRouter = require('./routers/loginRouter') 
const mongoose = require('mongoose')
const helmet = require('helmet')
const verifytoken = require("./middleware/auth")
const admin =require("./middleware/admin")
const auth = require("./middleware/auth")
mongoose.connect('mongodb://localhost/myapp',{
 useNewUrlParser: true,
 useUnifiedTopology: true
}).then(()=>console.log('connected to databases...')).catch((error)=>console.log('Error'+error));
// mongoose.set('useCreateIndex', true);
app.use(express.json());
app.use(helmet());
app.use('/api/users', userRouter)
app.use('/api/auth', authRouter)
app.get('/api/pro', [auth,admin], (req,res)=>{
res.send("pro here")
})

const port = process.env.port || 5500

app.listen(port, ()=> console.log('app working on port' +port+'......'))