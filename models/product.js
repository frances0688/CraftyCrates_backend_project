"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Product extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Product.belongsToMany(models.ThemesBoxes, {
				through: models.themesBoxesProducts,
				as: "ThemesBoxesProductsAssociation",
			});
			Product.hasMany(models.themesBoxesProducts, {
				as: "ThemesBoxesProductsProductAssociation",
			});
		}
	}
	Product.init(
		{
			product_name: DataTypes.STRING,
			description: DataTypes.STRING,
			inventory_amount: DataTypes.INTEGER,
		},
		{ sequelize, modelName: "Product" }
	);
	return Product;
};
