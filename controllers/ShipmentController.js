const { Shipment } = require("../models/index.js");

const ShipmentController = {
	create(req, res) {
		Shipment.create(req.body)
			.then(
				(shipment) =>
					shipment
						.addUser(req.body.UserId)
						.addTheme(req.body.ThemeId)
						.addBox(req.body.BoxId),
				res
					.status(201)
					.send({ message: "Shipment added successfully", shipment })
			)
			.catch((err) => console.error(err));
	},
};

module.exports = ShipmentController;
