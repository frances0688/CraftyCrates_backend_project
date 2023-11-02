const express = require("express");
const router = express.Router();
const BoxController = require("../controllers/BoxController");
const { authentication, isAdmin } = require("../middleware/authentication");

router.post("/", authentication, isAdmin, BoxController.create);
router.put("/:id", authentication, isAdmin, BoxController.update);
router.delete("/:id", authentication, isAdmin, BoxController.delete);
router.get("/", BoxController.getAll);
router.get("/id/:id", BoxController.getById);
router.get("/price/:price", BoxController.getByPrice);

module.exports = router;
