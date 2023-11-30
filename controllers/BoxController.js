const {Box, Product, Theme, Combination, CombinationProduct} = require("../models/index.js");

const BoxController = {
				async create(req, res) {
								try {
												const {size, price, description, ThemeId} = req.body;

												const box = await Box.create({size, price, description});
												const combination = await Combination.create({ThemeId, BoxId: box.id});
												res
																.status(201)
																.send({message: "Box added successfully", box, combination});
								} catch (error) {
												console.error(error);
												res
																.status(500)
																.send({message: "An error occurred while creating the box."});
								}
				},

				async update(req, res) {
								try {
												const {size, description, price, ThemeId} = req.body;

												const box = await Box.update({
																size,
																description,
																price
												}, {
																where: {
																				id: req.params.id
																}
												});
												const updatedBox = await Box.findByPk(req.params.id);
												await updatedBox.addThemes(ThemeId);
												res.send({message: "Box updated successfully"});
								} catch (error) {
												console.error(error);
												res
																.status(500)
																.send({message: "An error occurred while updating the box."});
								}
				},

				async getAll(req, res) {
								try {
												const boxes = await Box.findAll({
																include: [
																				{
																								model: Combination,
																								as: "BoxCombination",
																								include: [
																												{
																																model: Theme,
																																attributes: ["theme_name"]
																												}, {
																																model: Product,
																																attributes: ["product_name"]
																												}
																								]
																				}
																],
																attributes: ["id", "size", "price", "description"]
												});
												res.send(boxes);
								} catch (error) {
												console.error(error);
												res
																.status(500)
																.send({message: "An error occurred while getting boxes."});
								}
				},

				async getById(req, res) {
								try {
												const box = await Box.findByPk(req.params.id);
												res.send(box);
								} catch (error) {
												console.error(error);
												res
																.status(500)
																.send({message: "An error occurred while getting box by id."});
								}
				},

				async getByPrice(req, res) {
								try {
												const box = await Box.findAll({
																where: {
																				price: req.params.price
																}
												});
												res.send(box);
								} catch (error) {
												console.error(error);
												res
																.status(500)
																.send({message: "An error occurred while getting box by price."});
								}
				},

				async getPriceAsc(req, res) {
								try {
												const box = await Box.findAll({
																order: [
																				["price", "ASC"]
																]
												});
												res.send(box);
								} catch (error) {
												console.error(error);
												res
																.status(500)
																.send({message: "An error occurred while getting boxes in ascending price order."});
								}
				},

				async delete(req, res) {
								try {
												const box = await Box.destroy({
																where: {
																				id: req.params.id
																}
												});
												const combinations = await Combination.findAll({
																where: {
																				BoxId: req.params.id
																},
																attributes: ["id"]
												});
												await Promise.all(combinations.map(async(combination) => {
																await CombinationProduct.destroy({
																				where: {
																								CombinationId: combination.id
																				}
																});
												}));
												await Combination.destroy({
																where: {
																				BoxId: req.params.id
																}
												});
												res.send({message: "Box deleted successfully."});
								} catch (error) {
												console.error(error);
												res
																.status(500)
																.send({message: "An error occurred while deleting box."});
								}
				}
};

module.exports = BoxController;
