"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.bulkInsert("CombinationProducts", [
			{
				ProductId: 1,
				CombinationId: 5,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 1,
				CombinationId: 6,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 1,
				CombinationId: 7,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 1,
				CombinationId: 9,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 1,
				CombinationId: 10,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 1,
				CombinationId: 11,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 2,
				CombinationId: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 2,
				CombinationId: 2,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 2,
				CombinationId: 3,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 2,
				CombinationId: 2,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 2,
				CombinationId: 3,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 3,
				CombinationId: 18,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 3,
				CombinationId: 19,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 4,
				CombinationId: 13,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 4,
				CombinationId: 14,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 4,
				CombinationId: 15,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 4,
				CombinationId: 21,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 4,
				CombinationId: 22,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 4,
				CombinationId: 23,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 5,
				CombinationId: 17,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 5,
				CombinationId: 18,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 5,
				CombinationId: 19,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 6,
				CombinationId: 7,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 6,
				CombinationId: 19,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 7,
				CombinationId: 14,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 7,
				CombinationId: 15,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 8,
				CombinationId: 11,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 8,
				CombinationId: 23,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 9,
				CombinationId: 3,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 9,
				CombinationId: 10,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 9,
				CombinationId: 11,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 10,
				CombinationId: 2,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 10,
				CombinationId: 3,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 10,
				CombinationId: 22,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 10,
				CombinationId: 23,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				ProductId: 11,
				CombinationId: 15,
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
