const express = require("express");
const router = express.Router();
const OrderController = require("../controllers/OrderController");
const { authentication } = require("../middleware/authentication");

router.post("/", authentication, OrderController.create);
router.get("/", authentication, OrderController.getAll);

module.exports = router;
