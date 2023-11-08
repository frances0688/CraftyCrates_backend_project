"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.bulkInsert("Products", [
			{
				product_name: "Smart Garden Monitor",
				description:
					"This smart garden monitor allows you to remotely monitor the health of your plan" +
					"ts, track soil moisture, and receive real-time alerts on your smartphone.",
				inventory_amount: 20,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				product_name: "Pet-Friendly Plant Collection",
				description:
					"This collection features non-toxic and pet-friendly plants that add beauty to yo" +
					"ur home while keeping your furry friends safe.",
				inventory_amount: 20,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				product_name: "DIY Electronics Kit",
				description:
					"This kit includes components and instructions for building your own electronic g" +
					"adgets. Explore the world of electronics and create exciting projects.",
				inventory_amount: 20,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				product_name: "Dr Who Monopoly",
				description:
					"Join the Doctor in a time-traveling Monopoly adventure! Buy, sell, and trade ico" +
					"nic locations from the Doctor Who universe in this thrilling board game.",
				inventory_amount: 20,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				product_name: "Handmade Craft Kit",
				description:
					"Crafty people will love our handmade craft kit. It comes with all the materials " +
					"and instructions you need to create beautiful DIY crafts and personalized gifts.",
				inventory_amount: 20,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				product_name: "Indoor Herb Garden Starter Kit",
				description:
					"Perfect for gardeners and cooking enthusiasts, this starter kit includes everyth" +
					"ing you need to grow fresh herbs indoors. Enjoy cooking with homegrown herbs.",
				inventory_amount: 20,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				product_name: "Puzzle Adventure Game",
				description:
					"Get ready for an immersive puzzle adventure with this innovative board game. Sol" +
					"ve puzzles and uncover mysteries as you play.",
				inventory_amount: 20,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				product_name: "Virtual Reality Headset",
				description:
					"OImmerse yourself in breathtaking virtual worlds with our high-quality VR headse" +
					"t. Experience gaming and entertainment like never before as you step into a new " +
					"reality.",
				inventory_amount: 20,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				product_name: "Wireless Pet Tracker",
				description:
					"Pet lovers can ensure the safety of their furry companions with this wireless pe" +
					"t tracker. Keep track of your pet's location and receive alerts on your phone.",
				inventory_amount: 20,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				product_name: "Grumpy Cat Socks",
				description:
					"Add a touch of feline sass to your outfit with these whimsically grumpy cat-them" +
					"ed socks, perfect for cat lovers and those with a sense of humor",
				inventory_amount: 20,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				product_name: "Giant Garden Chess Kit",
				description:
					"Elevate your outdoor gatherings with this larger-than-life chess set. Enjoy stra" +
					"tegy and fun under the sun, making your garden the ultimate chess battleground..",
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
