"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.bulkInsert("ThemesBoxes", [
			{
				ThemeId: 1,
				BoxId: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ThemeId: 1,
				BoxId: 2,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ThemeId: 1,
				BoxId: 3,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ThemeId: 1,
				BoxId: 4,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ThemeId: 2,
				BoxId: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ThemeId: 2,
				BoxId: 2,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ThemeId: 2,
				BoxId: 3,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ThemeId: 2,
				BoxId: 4,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ThemeId: 3,
				BoxId: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ThemeId: 3,
				BoxId: 2,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ThemeId: 3,
				BoxId: 3,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ThemeId: 3,
				BoxId: 4,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ThemeId: 4,
				BoxId: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ThemeId: 4,
				BoxId: 2,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ThemeId: 4,
				BoxId: 3,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ThemeId: 4,
				BoxId: 4,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ThemeId: 5,
				BoxId: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ThemeId: 5,
				BoxId: 2,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ThemeId: 5,
				BoxId: 3,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ThemeId: 5,
				BoxId: 4,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ThemeId: 6,
				BoxId: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ThemeId: 6,
				BoxId: 2,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ThemeId: 6,
				BoxId: 3,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ThemeId: 6,
				BoxId: 4,
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
