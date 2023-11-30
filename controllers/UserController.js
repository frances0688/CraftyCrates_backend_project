const {
				User,
				Token,
				Sequelize,
				Box,
				Order,
				Theme,
				Combination,
				Product
} = require("../models/index.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {jwt_secret} = require("../config/config.json")["development"];
const {Op} = Sequelize;

const UserController = {
				async create(req, res, next) {
								try {
												req.body.role = "user";
												const password = bcrypt.hashSync(req.body.password, 10);
												const user = await User.create({
																...req.body,
																password
												});
												res
																.status(201)
																.send({message: "User created", user});
								} catch (error) {
												console.error(error);
												next(error);
								}
				},

				async login(req, res) {
								try {
												const user = await User.findOne({
																where: {
																				email: req.body.email
																}
												});
												if (!user) {
																return res
																				.status(400)
																				.send({message: "User does not exist"});
												}
												const isMatch = bcrypt.compareSync(req.body.password, user.password);
												if (!isMatch) {
																return res
																				.status(400)
																				.send({message: "Incorrect password"});
												}
												const token = jwt.sign({
																id: user.id
												}, jwt_secret);
												Token.create({token, UserId: user.id});
												res.send({
																message: "Welcome " + user.user_name,
																user,
																token
												});
								} catch (error) {
												console.error(error);
												res
																.status(500)
																.send({message: "An error occurred while trying to login."});
								}
				},

				async getInfo(req, res) {
								try {
												const token = req.headers.authorization;
												const payload = jwt.verify(token, jwt_secret);
												const UserId = payload.id;

												const userInfo = await User.findByPk(UserId, {
																include: [
																				{
																								model: Order,
																								include: [
																												{
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
																				}
																]
												});
												res
																.status(200)
																.send(userInfo);
								} catch (error) {
												console.error(error);
												res
																.status(500)
																.send({message: "An error occurred while getting user information."});
								}
				},

				async logout(req, res) {
								try {
												await Token.destroy({
																where: {
																				[Op.and]: [
																								{
																												UserId: req.user.id
																								}, {
																												token: req.headers.authorization
																								}
																				]
																}
												});
												res.send({message: "User logged out successfully"});
								} catch (error) {
												console.log(error);
												res
																.status(500)
																.send({message: "There was a problem trying to logout"});
								}
				}
};

module.exports = UserController;
