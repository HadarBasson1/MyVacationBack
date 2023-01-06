const express = require("express");
const router=express.Router();
const Flight=require('../controllers/flights')

router.get('/',Flight.getFlights)
router.post('/',Flight.addFlight)

module.exports = router