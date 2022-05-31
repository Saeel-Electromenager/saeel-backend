const { DataTypes } = require("sequelize");
const sequelize = require("../configurations/Sequelize");
const Product = require("./Product");

const imageSchema = {
  idImage: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  idProduct: {
    type: DataTypes.INTEGER,
    references: {
      model: "Products",
      key: "idProduct",
    },
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue:
      "https://c8.alamy.com/compfr/2axap2a/icone-de-modele-d-erreur-site-mort-page-introuvable-404-probleme-avec-le-systeme-spe-10-2axap2a.jpg",
  },
};

const Image = sequelize.define("Image", imageSchema);

Product.hasMany(Image, {
  foreignKey: { name: "idProduct", allowNull: false },
});
Image.belongsTo(Product, {
  foreignKey: { name: "idProduct", allowNull: false },
});

module.exports = Image;
