const { Product, Theme, Sequelize } = require("../models/index.js");
const { Op } = Sequelize;

const ProductController = {
	async create(req, res) {
		try {
			const product = await Product.create(req.body);
			product.addTheme(req.body.ThemeId).addBox(req.body.BoxId),
				res
					.status(201)
					.send({ message: "Product added successfully", product });
		} catch (error) {
			console.error(error);
		}
	},

	async update(req, res) {
		try {
			const product = await Product.update(req.body, {
				where: {
					id: req.params.id,
				},
			});
			product.addTheme(req.body.ThemeId).addBox(req.body.BoxId),
				res.send({ message: "Product updated successfully", product });
		} catch (error) {
			console.error(error);
		}
	},

	async getAll(req, res) {
		try {
			const products = await Product.findAll({
				include: [
					{
						model: Theme,
						through: {
							attributes: [],
						},
					},
				],
			});
			res.send(products);
		} catch (error) {
			console.error(error);
		}
	},

	async getById(req, res) {
		try {
			const product = await Product.findByPk(req.params.id, {
				include: [
					{
						model: Theme,
						through: {
							attributes: [],
						},
					},
				],
			});
			res.send(product);
		} catch (error) {
			console.error(error);
		}
	},

	async getOneByName(req, res) {
		try {
			const product = await Product.findOne({
				where: {
					product_name: {
						[Op.like]: `%${req.params.name}%`,
					},
				},
				include: [
					{
						model: Theme,
						through: {
							attributes: [],
						},
					},
				],
			});
			res.send(product);
		} catch (error) {
			console.error(error);
		}
	},

	async delete(req, res) {
		try {
			const product = await Product.destroy({
				where: {
					id: req.params.id,
				},
			});
			res.send("Product deleted successfully");
		} catch (error) {
			console.error(error);
		}
	},
};

module.exports = ProductController;
