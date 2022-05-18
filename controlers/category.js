const Category = require("../models/Category");
const Product = require("../models/Product");
const sequelize = require("../configurations/Sequelize");

exports.getCategories = (req, res) => {
  Category.findAll({
    attributes: [
      [
        sequelize.literal(
          "(SELECT COUNT(*) FROM Products WHERE Products.idProduct = Category.idCategory)"
        ),
        "n_product",
      ],
      "idCategory",
      "name",
      "image",
      "createdAT",
    ],
    group: "idCategory",
    order: [[sequelize.literal("n_product"), "DESC"]],
  }).then((categories) => res.status(200).json(categories));
};

exports.addCategory = (req, res) => {
  console.log(req.body);
  if (!req.body.name || !req.body.image)
    return res.status(400).json({ error: "Tous les champs sont requis" });
  Category.create({ ...req.body }, { fields: ["name", "image"] })
    .then(() => {
      res.status(201).json({ message: "Catégory crée avec sucée" });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: "error server" });
    });
};
exports.modifyCategory = (req, res) => {};
exports.deleteCategory = (req, res) => {};
