const { Theme, Product } = require("../models/index.js");

const ThemeController = {
	async create(req, res) {
		try {
			const theme = await Theme.create(req.body);
			res.status(201).send({ message: "Theme added successfully", theme });
		} catch (error) {
			console.error(error);
		}
	},

	async getAll(req, res) {
		try {
			const themes = await Theme.findAll({
				include: [
					{
						model: Product,
						through: {
							attributes: [],
						},
					},
				],
			});
			res.send(themes);
		} catch (error) {
			console.error(error);
		}
	},

	async getById(req, res) {
		try {
			const theme = await Theme.findByPk(req.params.id);
			res.send(theme);
		} catch (error) {
			console.error(error);
		}
	},

	async update(req, res) {
		try {
			const theme = await Theme.update(req.body, {
				where: {
					id: req.params.id,
				},
			});
			res.send({ message: "Theme updated successfully", theme });
		} catch (error) {
			console.error(error);
		}
	},

	async delete(req, res) {
		try {
			const theme = await Theme.destroy({
				where: {
					id: req.params.id,
				},
			});
			res.send({ message: "Theme deleted successfully", theme });
		} catch (error) {
			console.error(error);
		}
	},
};

module.exports = ThemeController;
