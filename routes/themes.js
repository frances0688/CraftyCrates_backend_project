const express = require("express");
const router = express.Router();
const ThemeController = require("../controllers/ThemeController");
const { authentication, isAdmin } = require("../middleware/authentication");

router.post("/", authentication, ThemeController.create);

module.exports = router;
