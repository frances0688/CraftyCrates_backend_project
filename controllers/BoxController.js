const { Box } = require("../models/index.js");

const BoxController = {
	create(req, res) {
		Box.create(req.body)
			.then(
				(box) => box.addProduct(req.body.ProductId).addTheme(req.body.ThemeId),
				res.status(201).send({ message: "Box added successfully" })
			)
			.catch((err) => console.error(err));
	},
};

module.exports = BoxController;
