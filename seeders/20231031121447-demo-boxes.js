"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.bulkInsert("Boxes", [
			{
				size: "Amateur",
				price: 14.99,
				description:
					"For those curious in learning a new craft, this box contains one (1) beginner le" +
					"vel project",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				size: "Enthusiast",
				price: 24.99,
				description:
					"For the more experienced hobbyist, this box contains two (2) medium level diffic" +
					"ulty projects",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				size: "Craftsman",
				price: 34.99,
				description:
					"For the professional craftsman, this box contains three (3) expert level difficu" +
					"lty projects",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				size: "Mystery Box",
				price: 19.99,
				description:
					"Get two (2) random projects between beginner and medium level difficulty",
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
