const express = require("express");
const router=express.Router()
const hotelCtrl = require('../Controller/hotelController');
// add route login
router.get('/hotels' ,hotelCtrl.getHotelController)
router.post('/hotels/create',hotelCtrl.addHotels)
