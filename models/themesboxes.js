"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class ThemesBoxes extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			ThemesBoxes.belongsTo(models.Theme);
			ThemesBoxes.belongsTo(models.Box);
			ThemesBoxes.belongsTo(models.Order);
			ThemesBoxes.belongsToMany(models.Product, {
				through: models.themesBoxesProducts,
			});
			// ThemesBoxes.hasMany(models.themesBoxesProducts);
		}
	}
	ThemesBoxes.init(
		{
			ThemeId: DataTypes.INTEGER,
			BoxId: DataTypes.INTEGER,
		},
		{ sequelize, modelName: "ThemesBoxes" }
	);
	return ThemesBoxes;
};
