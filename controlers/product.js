const Product = require("../models/Product");
const User = require("../models/User");

exports.getProduct = (req, res, next) => {
  Product.findOne({
    where: { idProduct: req.params.idProduct },
    include: ["Category", "User"],
  })
    .then((product) => {
      if (!product) {
        return res.status(404).json({ error: "Produit introuvale" });
      }
      res.status(200).json(product.toJSON());
    })
    .catch((error) => {
      res.status(500).json({ error: "Error server" });
    });
};

exports.addProduct = (req, res, next) => {
  User.findOne({ where: { idUser: req.auth.idUser } })
    .then((user) => {
      if (!user || user.type !== 2)
        return res
          .status(400)
          .json({ error: "Vous n'êtes pas autorisé a ajouter des produit" });
      Product.create({
        ...req.body,
        idProvider: req.auth.idUser,
      })
        .then(() =>
          res.status(201).json({ message: "Produit ajouté avec succès" })
        )
        .catch((error) => {
          res.status(500).json({ error: "Error server" });
        });
    })
    .catch((error) => res.status(500).json({ error: "Error server" }));
};

exports.modifyProduct = (req, res, next) => {
  Product.update({});
};

exports.deleteProduct = (req, res, next) => {
  // TODO
};

exports.topSales = (req, res, next) => {};

exports.topRated = (req, res, next) => {};
