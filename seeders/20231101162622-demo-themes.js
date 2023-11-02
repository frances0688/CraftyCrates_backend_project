"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.bulkInsert("Themes", [
			{
				theme_name: "Pet Lovers",
				description: "For pet lovers",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				theme_name: "Gardener's Paradise",
				description: "For gardeners",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				theme_name: "Tech Enthusiast",
				description: "For tech lovers",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				theme_name: "Board Game Bonanza",
				description: "For board game lovers",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				theme_name: "Crafty Creations",
				description: "For crafty people",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				theme_name: "Friki Box",
				description: "For frikis",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	},
};
