const { Theme } = require("../models/index.js");

const ThemeController = {
	create(req, res) {
		Theme.create(req.body)
			.then((theme) =>
				res.status(201).send({ message: "Theme added successfully", theme })
			)
			.catch((err) => console.error(err));
	},

	async update(req, res) {
		await Theme.update(req.body, {
			where: {
				id: req.params.id,
			},
		});
		res.status(200).send({ message: "Theme updated successfully" });
	},
};

module.exports = ThemeController;
