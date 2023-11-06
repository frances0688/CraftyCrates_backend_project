const { Order, User } = require("../models/index.js");
const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../config/config.json")["development"];

const OrderController = {
	async create(req, res) {
		try {
			const token = req.headers.authorization;
			const payload = jwt.verify(token, jwt_secret);
			const UserId = payload.id;
			const { ThemeBoxId } = req.body;

			const order = await Order.create({ UserId, ThemeBoxId });
			res.status(201).send({ message: "New order created.", order });
		} catch (error) {
			console.error(error);
			res
				.status(500)
				.send({ message: "An error occurred while creating the order." });
		}
	},
};

module.exports = OrderController;
