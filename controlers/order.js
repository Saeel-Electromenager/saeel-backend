const Order = require("../models/Order");
const Product = require("../models/Product");
const User = require("../models/User");
const Adress = require("../models/Adress");

exports.getMyOrders = (req, res, next) => {
  User.findOne({ where: { idUser: req.auth.idUser } }).then((user) => {
    const auth =
      [2, 3].includes(req.auth.idUser) || req.params.idUser === req.auth.idUser;
    if (!auth)
      return res.status(400).json({ error: "vous n'etes pas autorisé" });
    Order.findAll({
      where: { idUser: req.params.idUser },
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
  });
};

exports.addOrder = (req, res, next) => {
  Product.findOne({ where: { idProduct: req.body.idProduct } })
    .then((product) => {
      if (!product || product.quantity < req.body.qtty || req.body.qtty < 1)
        return res.status(404).json({ error: "Quantité demandé trop élevé" });
      const newOrder = {
        idUser: req.auth.idUser,
        idProduct: product.idProduct,
        idAdress: req.body.idAdress,
        amount: req.body.qtty * product.price + 2000,
        quandtity: req.body.qtty,
      };
      Order.create(newOrder)
        .then(() => {
          res.status(200).json({ message: "Commande effectuer avec succès" });
        })
        .catch((error) => {
          console.log(error);
          res.status(500).json({ error: "Erreur server" });
        });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: "Erreur server" });
    });
};

exports.getOrder = (req, res, next) => {
  User.findOne({ where: { idUser: req.auth.idUser } })
    .then((user) => {
      Order.findOne({
        where: { idOrder: req.params.idOrder },
        include: ["Product"],
      })
        .then((order) => {
          console.log(order);
          if (
            order.idUser !== user.idUser &&
            order.idUser !== order.Product.idProvider &&
            user.type < 2
          )
            return req.status(400).json({ error: "Non authorisé" });
          req.status(200).json({ message: "Commande effectuer avec succès" });
        })
        .catch((error) => {
          res.status(500).json({ error: "Erreur server" });
        });
    })
    .catch((error) => {
      res.status(500).json({ error: "Erreur server" });
    });
};
