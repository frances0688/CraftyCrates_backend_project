"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			User.hasMany(models.Token);
			User.hasMany(models.Order);
		}
	}
	User.init(
		{
			user_name: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: {
						msg: "Please enter your name.",
					},
				},
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: {
						msg: "Please enter an email address.",
					},
					isEmail: {
						msg: "Please enter a valid email.",
					},
				},
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: {
						msg: "Please enter a password.",
					},
				},
			},
			shipping_address: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notNull: {
						msg: "Please enter a shipping address.",
					},
				},
			},
			role: DataTypes.STRING,
		},
		{ sequelize, modelName: "User" }
	);
	return User;
};
