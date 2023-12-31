const {Product, Theme, Combination, CombinationProduct, Sequelize} = require("../models/index.js");
const {Op} = Sequelize;

const ProductController = {
				async create(req, res, next) {
								try {
												const {product_name, description, inventory_amount, CombinationId} = req.body;

												const product = await Product.create({product_name, description, inventory_amount});
												await product.addCombination(CombinationId);
												res
																.status(201)
																.send({message: "New product created and associated with the theme and box."});
								} catch (error) {
												console.error(error);
												next(error);
								}
				},

				async update(req, res) {
								try {
												const {product_name, description, inventory_amount, CombinationId} = req.body;

												const product = await Product.update({
																product_name,
																description,
																inventory_amount
												}, {
																where: {
																				id: req.params.id
																}
												});
												const updatedProduct = await Product.findByPk(req.params.id);
												await updatedProduct.setCombinations([CombinationId]);
												res.send({message: "Product updated successfully"});
								} catch (error) {
												console.error(error);
												res
																.status(500)
																.send({message: "An error occurred while updating the product."});
								}
				},

				async getAll(req, res) {
								try {
												const products = await Product.findAll({
																include: [
																				{
																								model: Combination,
																								include: [
																												{
																																model: Theme,
																																attributes: ["theme_name"]
																												}
																								],
																								attributes: ["id"]
																				}
																],
																attributes: ["id", "product_name", "description"]
												});
												res.send(products);
								} catch (error) {
												console.error(error);
												res
																.status(500)
																.send({message: "An error occurred while getting all products."});
								}
				},

				async getById(req, res) {
								try {
												const product = await Product.findByPk(req.params.id);
												res.send(product);
								} catch (error) {
												console.error(error);
												res
																.status(500)
																.send({message: "An error occurred while getting the product by id."});
								}
				},

				async getByName(req, res) {
								try {
												const product = await Product.findAll({
																where: {
																				product_name: {
																								[Op.like]: `%${req.params.name}%`
																				}
																}
												});
												res.send(product);
								} catch (error) {
												console.error(error);
												res
																.status(500)
																.send({message: "An error occurred while getting the product by name."});
								}
				},

				async delete(req, res) {
								try {
												const product = await Product.destroy({
																where: {
																				id: req.params.id
																}
												});
												await CombinationProduct.destroy({
																where: {
																				ProductId: req.params.id
																}
												});
												res.send("Product deleted successfully");
								} catch (error) {
												console.error(error);
												res
																.status(500)
																.send({message: "An error occurred while deleting the product."});
								}
				}
};

module.exports = ProductController;
