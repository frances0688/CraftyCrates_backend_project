"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class themesBoxesProducts extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			themesBoxesProducts.belongsTo(models.Product, {
				as: "ProductAssociation",
			});
			themesBoxesProducts.belongsTo(models.ThemesBoxes, {
				as: "ThemesBoxesHasAssociation",
			});
		}
	}
	themesBoxesProducts.init(
		{
			ThemeBoxId: DataTypes.INTEGER,
			ProductId: DataTypes.INTEGER,
		},
		{ sequelize, modelName: "themesBoxesProducts" }
	);
	return themesBoxesProducts;
};
