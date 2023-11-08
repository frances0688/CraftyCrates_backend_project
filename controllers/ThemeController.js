const { Op } = require("sequelize");
const {
	Theme,
	Product,
	Box,
	Combination,
	CombinationProduct,
} = require("../models/index.js");

const ThemeController = {
	async create(req, res) {
		try {
			const { theme_name, description, BoxId } = req.body;

			const theme = await Theme.create({ theme_name, description });
			const combinations = await Combination.create({
				BoxId,
				ThemeId: theme.id,
			});
			res
				.status(201)
				.send({ message: "Theme added successfully", theme, combinations });
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
						model: Combination,
						as: "ThemeCombination",
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
			const combinations = await Combination.findAll({
				where: {
					ThemeId: req.params.id,
				},
				attributes: ["id"],
			});
			await Promise.all(
				combinations.map(async (combination) => {
					await CombinationProduct.destroy({
						where: {
							CombinationId: combination.id,
						},
					});
				})
			);
			await Combination.destroy({
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
