const Order = require("../models/Order");
const Product = require("../models/Product");
const User = require("../models/User");
const Adress = require("../models/Adress");

exports.getMyOrders = (req, res, next) => {
  Order.findAll({
    include: [
      {
        model: Product,
        include: "Category",
      },
      "User",
      "Adress",
    ],
  })
    .then((orders) => res.status(200).json({ orders }))
    .catch((error) => {
      res.status(500).json({ error: "Erreur server" });
    });
};
