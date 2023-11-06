"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Box extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Box.belongsToMany(models.Theme, { through: models.ThemesBox });
			Box.hasMany(models.ThemesBox, { as: "BoxThemesBoxes" });
		}
	}
	Box.init(
		{
			size: DataTypes.STRING,
			price: DataTypes.FLOAT(10, 2),
			description: DataTypes.STRING,
		},
		{ sequelize, modelName: "Box" }
	);
	return Box;
};
