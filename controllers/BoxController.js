const { Box, Product, Theme } = require("../models/index.js");

const BoxController = {
	async create(req, res) {
		try {
			const box = await Box.create(req.body);
			res.status(201).send({ message: "Box added successfully", box });
		} catch (error) {
			console.error(error);
		}
	},

	async getAll(req, res) {
		try {
			const boxes = await Box.findAll({
				include: [
					{
						model: Product,
						through: {
							attributes: [],
						},
					},
				],
			});
			res.send(boxes);
		} catch (error) {
			console.error(error);
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
