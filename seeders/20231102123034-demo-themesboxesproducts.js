"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.bulkInsert("ThemesBoxesProducts", [
			{
				ProductId: 1,
				ThemeBoxId: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 1,
				ThemeBoxId: 2,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 1,
				ThemeBoxId: 3,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 1,
				ThemeBoxId: 13,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 1,
				ThemeBoxId: 14,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 1,
				ThemeBoxId: 15,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 2,
				ThemeBoxId: 5,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 2,
				ThemeBoxId: 6,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 2,
				ThemeBoxId: 7,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 2,
				ThemeBoxId: 17,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 2,
				ThemeBoxId: 18,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 2,
				ThemeBoxId: 19,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 3,
				ThemeBoxId: 9,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 3,
				ThemeBoxId: 10,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 3,
				ThemeBoxId: 11,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 3,
				ThemeBoxId: 21,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 3,
				ThemeBoxId: 22,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 3,
				ThemeBoxId: 23,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 4,
				ThemeBoxId: 6,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 4,
				ThemeBoxId: 7,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 4,
				ThemeBoxId: 18,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 4,
				ThemeBoxId: 19,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 5,
				ThemeBoxId: 2,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 5,
				ThemeBoxId: 3,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 5,
				ThemeBoxId: 22,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 5,
				ThemeBoxId: 23,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 6,
				ThemeBoxId: 10,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 6,
				ThemeBoxId: 11,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 7,
				ThemeBoxId: 14,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 7,
				ThemeBoxId: 15,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 8,
				ThemeBoxId: 3,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 8,
				ThemeBoxId: 23,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 9,
				ThemeBoxId: 7,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 9,
				ThemeBoxId: 15,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 10,
				ThemeBoxId: 11,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 10,
				ThemeBoxId: 19,
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
