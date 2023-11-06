const express = require("express");
const router = express.Router();
const OrderController = require("../controllers/OrderController");
const { authentication, isAdmin } = require("../middleware/authentication");

router.post("/", authentication, OrderController.create);
router.get("/", authentication, isAdmin, OrderController.getAll);
router.get("/id/:id", authentication, isAdmin, OrderController.getById);
router.delete("/id/:id", authentication, isAdmin, OrderController.delete);

module.exports = router;
