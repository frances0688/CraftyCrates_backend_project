const {
				Order,
				User,
				Combination,
				CombinationProduct,
				Theme,
				Box,
				Product
} = require("../models/index.js");
const jwt = require("jsonwebtoken");
const {jwt_secret} = require("../config/config.json")["development"];

const OrderController = {
				async getCombinationId(req, res) {
								try {
												const {ThemeId, BoxId} = req.query;
												const combinationId = await Combination.findOne({
																where: {
																				ThemeId: ThemeId,
																				BoxId: BoxId
																}
												});
												res
																.status(201)
																.send({message: "Combination ID", CombinationId: combinationId.id});
								} catch (error) {
												console.error(error);
												res
																.status(500)
																.send({message: "An error occurred while finding Combination ID."});
								}
				},
				async getProductsInBox(req, res) {
								const {CombinationId} = req.query;
								try {
												const combinationProducts = await CombinationProduct.findAll({where: {
																				CombinationId
																}, attributes: ["ProductId"]});
												const productIds = combinationProducts.map((product) => product.ProductId);
												const products = await Product.findAll({
																where: {
																				id: productIds
																},
																attributes: ["id", "product_name", "description"]
												});
												res.send({message: "Products in combination box", products});
								} catch (error) {
												console.error(error);
												res
																.status(500)
																.send({message: "An error occurred while getting products in specific box."});
								}
				},

				async create(req, res) {
								try {
												const token = req.headers.authorization;
												const payload = jwt.verify(token, jwt_secret);
												const UserId = payload.id;
												const {CombinationId} = req.body;

												const order = await Order.create({UserId, CombinationId});
												res
																.status(201)
																.send({message: "New order created.", order});
								} catch (error) {
												console.error(error);
												res
																.status(500)
																.send({message: "An error occurred while creating the order."});
								}
				},
				async getAll(req, res) {
								try {
												const orders = await Order.findAll({
																include: [
																				{
																								model: User,
																								attributes: ["user_name"]
																				}, {
																								model: Combination,
																								include: [
																												{
																																model: Theme,
																																attributes: ["theme_name"]
																												}, {
																																model: Box,
																																attributes: ["size", "price"]
																												}, {
																																model: Product,
																																attributes: ["product_name"]
																												}
																								]
																				}
																]
												});
												res.send(orders);
								} catch (error) {
												console.error(error);
												res
																.status(500)
																.send({message: "An error occurred while getting all orders."});
								}
				},

				async getById(req, res) {
								try {
												const order = await Order.findByPk(req.params.id, {
																include: [
																				{
																								model: User,
																								attributes: ["user_name"]
																				}, {
																								model: Combination,
																								include: [
																												{
																																model: Theme,
																																attributes: ["theme_name"]
																												}, {
																																model: Box,
																																attributes: ["size", "price"]
																												}, {
																																model: Product,
																																attributes: ["product_name"]
																												}
																								]
																				}
																]
												});
												res.send(order);
								} catch (error) {
												console.error(error);
												res
																.status(500)
																.send({message: "An error occurred while getting the order by id."});
								}
				},
				async delete(req, res) {
								try {
												const order = await Order.destroy({
																where: {
																				id: req.params.id
																}
												});
												res.send({message: "Order deleted successfully."});
								} catch (error) {
												console.error(error);
												res
																.status(500)
																.send({message: "An error occurred while deleting the order."});
								}
				}
};

module.exports = OrderController;
