const { DataTypes } = require("sequelize");
const sequelize = require("../configurations/Sequelize");
const User = require("./User");
const Product = require("./Product");

const favoriteSchema = {
  idFavorite: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  idUser: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "Users",
      key: "idUser",
    },
  },
  idProduct: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "Products",
      key: "idProduct",
    },
  },
};

const Favorite = sequelize.define("Favorite", favoriteSchema);

User.hasMany(Favorite, {
  foreignKey: { name: "idUser", allowNull: false },
});
Favorite.belongsTo(User, {
  foreignKey: { name: "idUser", allowNull: false },
});

Product.hasMany(Favorite, {
  foreignKey: { name: "idProduct", allowNull: false },
});
Favorite.belongsTo(Product, {
  foreignKey: { name: "idProduct", allowNull: false },
});

module.exports = Favorite;
