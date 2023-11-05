const { Box, Product, Theme, ThemesBoxes } = require("../models/index.js");

const BoxController = {
	async create(req, res) {
		try {
			const { size, price, description, ThemeId } = req.body;

			const box = await Box.create({ size, price, description });
			const themesBoxes = await ThemesBoxes.create({ ThemeId, BoxId: box.id });
			res
				.status(201)
				.send({ message: "Box added successfully", box, themesBoxes });
		} catch (error) {
			console.error(error);
			res
				.status(500)
				.send({ message: "An error occurred while creating the box." });
		}
	},

	async getAll(req, res) {
		try {
			const boxes = await Box.findAll({
				include: [
					{
						model: ThemesBoxes, // Include the ThemesBoxes model
						as: "BoxThemesBoxes", // Use the correct alias
						include: [
							{
								model: Theme, // Include the Theme model
								attributes: ["theme_name"], // Include only the 'theme_name' attribute
							},
							{
								model: Product, // Include the Product model
								attributes: ["product_name"], // Include only the 'product_name' attribute
							},
						],
					},
				],
				attributes: ["id", "size"],
			});
			res.send(boxes);
		} catch (error) {
			console.error(error);
			res
				.status(500)
				.send({ message: "An error occurred while getting boxes." });
		}
	},

	async getById(req, res) {
		try {
			const box = await Box.findByPk(req.params.id);
			res.send(box);
		} catch (error) {
			console.error(error);
		}
	},

	async getByPrice(req, res) {
		try {
			const box = await Box.findAll({
				where: {
					price: req.params.price,
				},
				include: [Product],
			});
			res.send(box);
		} catch (error) {
			console.error(error);
		}
	},

	async getPriceAsc(req, res) {
		try {
			const box = await Box.findAll({
				order: [["price", "ASC"]],
			});
			res.send(box);
		} catch (error) {
			console.error(error);
		}
	},

	async update(req, res) {
		try {
			const box = await Box.update(req.body, {
				where: {
					id: req.params.id,
				},
			});
			res.send("Box updated successfully");
		} catch (error) {
			console.error(error);
		}
	},

	async delete(req, res) {
		try {
			const box = await Box.destroy({
				where: {
					id: req.params.id,
				},
			});
			res.send({ message: "Box deleted successfully", box });
		} catch (error) {
			console.error(error);
		}
	},
};

module.exports = BoxController;
