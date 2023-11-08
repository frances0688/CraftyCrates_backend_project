const express = require("express");
const router = express.Router();
const ReviewController = require("../controllers/ReviewController");
const { authentication } = require("../middleware/authentication");

router.post("/", authentication, ReviewController.create);
// router.put("/:id", authentication, ReviewController.update);
// router.delete("/:id", authentication, ReviewController.delete);
// router.get("/", ReviewController.getAll); router.get("/id/:id",
// ReviewController.getById);

module.exports = router;
