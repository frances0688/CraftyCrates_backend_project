const { Theme, Box, Product, Sequelize } = require("../models/index.js");
const { Op } = Sequelize;

const ThemeController = {
	create(req, res) {
		Theme.create(req.body)
			.then((theme) =>
				res.status(201).send({ message: "Theme added successfully", theme })
			)
			.catch((err) => console.error(err));
	},

	getById(req, res) {
		Theme.findByPk(req.params.id, {
			include: [Box, Product],
		})
			.then((theme) => res.status(200).send(theme))
			.catch((err) => console.error(err));
	},

	getOneByName(req, res) {
		Theme.findOne({
			where: {
				theme_name: {
					[Op.like]: `%${req.params.name}%`,
				},
			},
			include: [Box, Product],
		})
			.then((theme) => res.status(200).send(theme))
			.catch((err) => console.error(err));
	},

	async update(req, res) {
		await Theme.update(req.body, {
			where: {
				id: req.params.id,
			},
		})
			.then((theme) =>
				res.status(200).send({ message: "Theme updated successfully", theme })
			)
			.catch((err) => console.error(err));
	},

	async delete(req, res) {
		await Theme.destroy({
			where: {
				id: req.params.id,
			},
		})
			.then((theme) =>
				res.status(200).send({ message: "Theme deleted successfully", theme })
			)
			.catch((err) => console.error(err));
	},
};

module.exports = ThemeController;
