const express = require("express");
const router = express.Router();
const BoxController = require("../controllers/BoxController");
const { authentication, isAdmin } = require("../middleware/authentication");

router.post("/", authentication, isAdmin, BoxController.create);

module.exports = router;
