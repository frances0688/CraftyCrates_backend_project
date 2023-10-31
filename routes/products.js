const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/ProductController");
const { authentication, isAdmin } = require("../middleware/authentication");

router.post("/", authentication, isAdmin, ProductController.create);
router.put("/:id", authentication, isAdmin, ProductController.update);
router.delete("/:id", authentication, isAdmin, ProductController.delete);
router.get("/id/:id", ProductController.getById);
router.get("/name/:name", ProductController.getOneByName);

module.exports = router;
