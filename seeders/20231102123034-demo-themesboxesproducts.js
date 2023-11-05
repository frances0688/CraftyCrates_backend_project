"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.bulkInsert("ThemesBoxesProducts", [
			{
				ProductId: 1,
				ThemesBoxThemeId: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 1,
				ThemesBoxThemeId: 2,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 1,
				ThemesBoxThemeId: 3,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 1,
				ThemesBoxThemeId: 13,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 1,
				ThemesBoxThemeId: 14,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 1,
				ThemesBoxThemeId: 15,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 2,
				ThemesBoxThemeId: 5,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 2,
				ThemesBoxThemeId: 6,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 2,
				ThemesBoxThemeId: 7,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 2,
				ThemesBoxThemeId: 17,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 2,
				ThemesBoxThemeId: 18,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 2,
				ThemesBoxThemeId: 19,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 3,
				ThemesBoxThemeId: 9,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 3,
				ThemesBoxThemeId: 10,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 3,
				ThemesBoxThemeId: 11,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 3,
				ThemesBoxThemeId: 21,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 3,
				ThemesBoxThemeId: 22,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 3,
				ThemesBoxThemeId: 23,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 4,
				ThemesBoxThemeId: 6,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 4,
				ThemesBoxThemeId: 7,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 4,
				ThemesBoxThemeId: 18,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 4,
				ThemesBoxThemeId: 19,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 5,
				ThemesBoxThemeId: 2,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 5,
				ThemesBoxThemeId: 3,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 5,
				ThemesBoxThemeId: 22,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 5,
				ThemesBoxThemeId: 23,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 6,
				ThemesBoxThemeId: 10,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 6,
				ThemesBoxThemeId: 11,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 7,
				ThemesBoxThemeId: 14,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 7,
				ThemesBoxThemeId: 15,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 8,
				ThemesBoxThemeId: 3,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 8,
				ThemesBoxThemeId: 23,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 9,
				ThemesBoxThemeId: 7,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 9,
				ThemesBoxThemeId: 15,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 10,
				ThemesBoxThemeId: 11,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 10,
				ThemesBoxThemeId: 19,
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
