const express = require("express");
const router = express.Router();
const Flight = require("../controllers/flights");

/**
 * @swagger
 * tags:
 * name: Auth
 * description: The Authentication API
 */

router.get("/", Flight.getFlights);
router.get("/:id", Flight.getFlightById);
router.post("/addFlight", Flight.addFlight);
router.post("/updateFlight", Flight.updateFlight);
router.delete("/deleteFlight/:id", Flight.deleteFlightById);
//deleteFlightById

module.exports = router;
