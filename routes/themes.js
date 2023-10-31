const express = require("express");
const router = express.Router();
const ThemeController = require("../controllers/ThemeController");
const { authentication, isAdmin } = require("../middleware/authentication");

router.post("/", authentication, isAdmin, ThemeController.create);
router.put("/:id", authentication, isAdmin, ThemeController.update);

module.exports = router;
