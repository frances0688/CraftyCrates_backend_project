const { Op } = require("sequelize");
const {
	Theme,
	Product,
	Box,
	ThemesBoxes,
	themesBoxesProducts,
} = require("../models/index.js");

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
						model: ThemesBoxes,
						as: "ThemeThemesBoxes",
						include: [
							{
								model: Box,
								attributes: ["size", "price"],
							},
							{
								model: Product,
								attributes: ["product_name"],
							},
						],
					},
				],
				attributes: ["id", "theme_name"],
			});
			res.send(themes);
		} catch (error) {
			console.error(error);
			res
				.status(500)
				.send({ message: "An error occurred while getting themes." });
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

	async getByName(req, res) {
		try {
			const theme = await Theme.findAll({
				where: {
					theme_name: {
						[Op.like]: `%${req.params.name}%`,
					},
				},
			});
			res.send(theme);
		} catch (error) {
			console.error(error);
			res
				.status(500)
				.send({
					message: "An error occurred while getting the theme by name.",
				});
		}
	},

	async delete(req, res) {
		try {
			const theme = await Theme.destroy({
				where: {
					id: req.params.id,
				},
			});
			const themeBoxes = await ThemesBoxes.findAll({
				where: {
					ThemeId: req.params.id,
				},
				attributes: ["id"],
			});
			await Promise.all(
				themeBoxes.map(async (themeBox) => {
					await themesBoxesProducts.destroy({
						where: {
							ThemesBoxThemeId: themeBox.id,
						},
					});
				})
			);
			await ThemesBoxes.destroy({
				where: {
					ThemeId: req.params.id,
				},
			});
			res.send({ message: "Theme deleted successfully." });
		} catch (error) {
			console.error(error);
			res
				.status(500)
				.send({ message: "An error occurred while deleting theme." });
		}
	},
};

module.exports = ThemeController;
