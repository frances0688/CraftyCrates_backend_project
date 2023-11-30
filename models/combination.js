"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
				class Combination extends Model {
								/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
								static associate(models) {
												Combination.belongsTo(models.Theme);
												Combination.belongsTo(models.Box);
												Combination.belongsToMany(models.Product, {through: models.CombinationProduct});
								}
				}
				Combination.init({
								id: {
												type: DataTypes.INTEGER,
												primaryKey: true,
												autoIncrement: true
								},
								ThemeId: DataTypes.INTEGER,
								BoxId: DataTypes.INTEGER
				}, {sequelize, modelName: "Combination"});
				return Combination;
};
