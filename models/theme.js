"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Theme extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Theme.belongsToMany(models.Box, {
				through: models.ThemesBoxes,
				as: "BoxThemesBoxesAssociation",
			});
			Theme.hasMany(models.ThemesBoxes, { as: "ThemesBoxesAssociation" });
		}
	}
	Theme.init(
		{
			theme_name: DataTypes.STRING,
			description: DataTypes.STRING,
		},
		{ sequelize, modelName: "Theme" }
	);
	return Theme;
};
