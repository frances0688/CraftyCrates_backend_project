"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class ThemesBox extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			ThemesBox.belongsTo(models.Theme);
			ThemesBox.belongsTo(models.Box);
			ThemesBox.hasOne(models.Order);
			ThemesBox.belongsToMany(models.Product, {
				through: models.themesBoxesProducts,
			});
			// ThemesBoxes.hasMany(models.themesBoxesProducts);
		}
	}
	ThemesBox.init(
		{
			ThemeId: DataTypes.INTEGER,
			BoxId: DataTypes.INTEGER,
		},
		{ sequelize, modelName: "ThemesBox" }
	);
	return ThemesBox;
};
