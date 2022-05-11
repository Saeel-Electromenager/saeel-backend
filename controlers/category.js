const Category = require("../models/Category");

exports.getCategories = (req, res) => {
  Category.findAll().then((categories) => res.status(200).json(categories));
};

exports.addCategory = (req, res) => {};
exports.modifyCategory = (req, res) => {};
exports.deleteCategory = (req, res) => {};
