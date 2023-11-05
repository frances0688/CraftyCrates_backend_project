const express = require("express");
const router = express.Router();
const ThemeController = require("../controllers/ThemeController");
const { authentication, isAdmin } = require("../middleware/authentication");

router.post("/", authentication, isAdmin, ThemeController.create);
router.put("/:id", authentication, isAdmin, ThemeController.update);
router.delete("/:id", authentication, isAdmin, ThemeController.delete);
router.get("/", ThemeController.getAll);
router.get("/id/:id", ThemeController.getById);
router.get("/name/:name", ThemeController.getByName);

module.exports = router;
