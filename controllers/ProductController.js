const { Product, Box, Theme, Sequelize } = require("../models/index.js");
const { Op } = Sequelize;

const ProductController = {
	create(req, res) {
		Product.create(req.body)
			.then(
				(product) => product.addTheme(req.body.ThemeId).addBox(req.body.BoxId),
				res.status(201).send({ message: "Product added successfully", product })
			)
			.catch((err) => console.error(err));
	},

	getById(req, res) {
		Product.findByPk(req.params.id, {
			include: [Box, Theme],
		})
			.then((product) => res.status(200).send(product))
			.catch((err) => console.error(err));
	},

	async update(req, res) {
		await Product.update(req.body, {
			where: {
				id: req.params.id,
			},
		})
			.then(res.status(200).send({ message: "Product updated successfully" }))
			.catch((err) => console.error(err));
	},

	getOneByName(req, res) {
		Product.findOne({
			where: {
				product_name: {
					[Op.like]: `%${req.params.name}%`,
				},
			},
			include: [Box, Theme],
		})
			.then((product) => res.status(200).send(product))
			.catch((err) => console.error(err));
	},

	async delete(req, res) {
		await Product.destroy({
			where: {
				id: req.params.id,
			},
		})
			.then(res.status(200).send({ message: "Product deleted successfully" }))
			.catch((err) => console.error(err));
	},
};

module.exports = ProductController;
