const express = require('express')
const router=express.Router()
const loginCtrl = require('../Controller/loginController')
// add route login
router.post('/login' ,loginCtrl)



module.exports = router