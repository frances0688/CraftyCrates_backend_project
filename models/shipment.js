"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Shipment extends Model {
    /**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
    static associate(models) {
      Shipment.belongsTo(models.User);
      Shipment.hasOne(models.Theme);
      Shipment.hasOne(models.Box);
    }
  }
  Shipment.init({
    createdDate: DataTypes.DATE,
    deliveryDate: DataTypes.DATE,
    UserId: DataTypes.INTEGER,
    ThemeId: DataTypes.INTEGER,
    BoxId: DataTypes.INTEGER
  }, {sequelize, modelName: "Shipment"});
  return Shipment;
};
