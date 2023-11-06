"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Order extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Order.belongsTo(models.User);
			Order.belongsTo(models.ThemesBox);
		}
	}
	Order.init(
		{
			UserId: DataTypes.INTEGER,
			ThemesBoxThemeId: DataTypes.INTEGER,
		},
		{ sequelize, modelName: "Order" }
	);
	return Order;
};
