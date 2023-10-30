"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Box extends Model {
    /**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
    static associate(models) {
      Box.belongsTo(models.Shipment);
      Box.hasMany(models.Theme);
      Box.hasMany(models.Product);
    }
  }
  Box.init({
    size: DataTypes.STRING,
    price: DataTypes.FLOAT,
    description: DataTypes.STRING
  }, {sequelize, modelName: "Box"});
  return Box;
};
