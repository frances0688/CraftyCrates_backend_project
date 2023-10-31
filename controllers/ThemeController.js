const { Theme } = require("../models/index.js");

const ThemeController = {
	create(req, res) {
		Theme.create(req.body)
			.then((theme) =>
				res.status(201).send({ message: "Theme added successfully", theme })
			)
			.catch((err) => console.error(err));
	},
};

module.exports = ThemeController;
