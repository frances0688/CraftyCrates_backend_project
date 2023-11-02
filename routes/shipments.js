const express = require("express");
const router = express.Router();
const ShipmentController = require("../controllers/ShipmentController");
const { authentication, isAdmin } = require("../middleware/authentication");

router.post("/", authentication, ShipmentController.create);

module.exports = router;
