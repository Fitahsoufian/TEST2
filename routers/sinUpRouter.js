const express = require('express')
const router=express.Router()

const singUpCtrl = require("../Controller/sinUpController")

router.post('/' ,singUpCtrl)

module.exports= router