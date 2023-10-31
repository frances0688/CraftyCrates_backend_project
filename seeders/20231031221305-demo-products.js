"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.bulkInsert("Products", [
			{
				product_name: "Product 1",
				description: "Product 1 description",
				inventory_amount: 20,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				product_name: "Product 2",
				description: "Product 2 description",
				inventory_amount: 20,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				product_name: "Product 3",
				description: "Product 3 description",
				inventory_amount: 20,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				product_name: "Product 4",
				description: "Product 4 description",
				inventory_amount: 20,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				product_name: "Product 5",
				description: "Product 5 description",
				inventory_amount: 20,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				product_name: "Product 6",
				description: "Product 6 description",
				inventory_amount: 20,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				product_name: "Product 7",
				description: "Product 7 description",
				inventory_amount: 20,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				product_name: "Product 8",
				description: "Product 8 description",
				inventory_amount: 20,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				product_name: "Product 9",
				description: "Product 9 description",
				inventory_amount: 20,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				product_name: "Product 10",
				description: "Product 10 description",
				inventory_amount: 20,
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
