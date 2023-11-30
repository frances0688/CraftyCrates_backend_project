"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
				class Product extends Model {
								/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
								static associate(models) {
												Product.belongsToMany(models.Combination, {through: models.CombinationProduct});
								}
				}
				Product.init({
								product_name: {
												type: DataTypes.STRING,
												allowNull: false,
												validate: {
																notNull: {
																				msg: "Please enter product name."
																}
												}
								},
								description: {
												type: DataTypes.STRING,
												allowNull: false,
												validate: {
																notNull: {
																				msg: "Please enter product description."
																}
												}
								},
								inventory_amount: {
												type: DataTypes.INTEGER,
												allowNull: false,
												validate: {
																notNull: {
																				msg: "Please enter inventory amount."
																}
												}
								}
				}, {sequelize, modelName: "Product"});
				return Product;
};
