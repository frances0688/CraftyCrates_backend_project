const { Product } = require("../models/index.js");

const ProductController = {
	create(req, res) {
		Product.create(req.body)
			.then((product) =>
				res.status(201).send({ message: "Product added successfully", product })
			)
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
