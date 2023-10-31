const { Box } = require("../models/index.js");

const BoxController = {
	create(req, res) {
		Box.create(req.body)
			.then((box) =>
				res.status(201).send({ message: "Box added successfully", box })
			)
			.catch((err) => console.error(err));
	},
};

module.exports = BoxController;
