const {
	Order,
	User,
	ThemesBox,
	Theme,
	Box,
	Product,
} = require("../models/index.js");
const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../config/config.json")["development"];

const OrderController = {
	async create(req, res) {
		try {
			const token = req.headers.authorization;
			const payload = jwt.verify(token, jwt_secret);
			const UserId = payload.id;
			const { ThemesBoxId } = req.body;

			const order = await Order.create({ UserId, ThemesBoxId });
			res.status(201).send({ message: "New order created.", order });
		} catch (error) {
			console.error(error);
			res
				.status(500)
				.send({ message: "An error occurred while creating the order." });
		}
	},
	async getAll(req, res) {
		try {
			const orders = await Order.findAll({
				include: [
					{
						model: User,
						attributes: ["user_name"],
					},
					{
						model: ThemesBox,
						include: [
							{
								model: Theme,
								attributes: ["theme_name"],
							},
							{
								model: Box,
								attributes: ["size"],
							},
							{
								model: Product,
								attributes: ["product_name"],
							},
						],
					},
				],
			});
			res.send(orders);
		} catch (error) {
			console.error(error);
			res
				.status(500)
				.send({ message: "An error occurred while getting all orders." });
		}
	},

	async getById(req, res) {
		try {
			const order = await Order.findByPk(req.params.id, {
				include: [
					{
						model: User,
						attributes: ["user_name"],
					},
					{
						model: ThemesBox,
						include: [
							{
								model: Theme,
								attributes: ["theme_name"],
							},
							{
								model: Box,
								attributes: ["size"],
							},
							{
								model: Product,
								attributes: ["product_name"],
							},
						],
					},
				],
			});
			res.send(order);
		} catch (error) {
			console.error(error);
			res
				.status(500)
				.send({ message: "An error occurred while getting the order by id." });
		}
	},
	async delete(req, res) {
		try {
			const order = await Order.destroy({
				where: {
					id: req.params.id,
				},
			});
			res.send({ message: "Order deleted successfully." });
		} catch (error) {
			console.error(error);
			res
				.status(500)
				.send({ message: "An error occurred while deleting the order." });
		}
	},
};

module.exports = OrderController;
