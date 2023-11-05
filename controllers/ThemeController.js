const { Theme, Product, ThemesBoxes } = require("../models/index.js");

const ThemeController = {
	async create(req, res) {
		try {
			const { theme_name, description, BoxId } = req.body;

			const theme = await Theme.create({ theme_name, description });
			const themesBoxes = await ThemesBoxes.create({
				BoxId,
				ThemeId: theme.id,
			});
			res
				.status(201)
				.send({ message: "Theme added successfully", theme, themesBoxes });
		} catch (error) {
			console.error(error);
			res
				.status(500)
				.send({ message: "An error occurred while creating the theme." });
		}
	},

	async update(req, res) {
		try {
			const { theme_name, description, BoxId } = req.body;

			const theme = await Theme.update(
				{
					theme_name,
					description,
				},
				{
					where: {
						id: req.params.id,
					},
				}
			);
			const updatedTheme = await Theme.findByPk(req.params.id);
			await updatedTheme.addBoxes(BoxId);
			res.send({ message: "Theme updated successfully" });
		} catch (error) {
			console.error(error);
			res
				.status(500)
				.send({ message: "An error occurred while updating the theme." });
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
