const { DataTypes } = require("sequelize");
const sequelize = require("../configurations/Sequelize");
const User = require("./User");
const Product = require("./Product");
const Adress = require("./Adress");

const orderSchema = {
  idOrder: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  idUser: {
    type: DataTypes.INTEGER,
    references: {
      model: "Users",
      key: "idUser",
    },
  },
  idProduct: {
    type: DataTypes.INTEGER,
    references: {
      model: "Products",
      key: "idProduct",
    },
  },
  idAdress: {
    type: DataTypes.INTEGER,
    references: {
      model: "Adresses",
      key: "idAdress",
    },
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
    },
  },
  quandtity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
    validate: {
      min: 0,
    },
  },
  status: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    validate: {
      isIn: [[0, 1, 2]], // ["Waiting for payment", "In delivering", "Delivered"]
    },
  },
};

const Order = sequelize.define("Order", orderSchema);

User.hasMany(Order, {
  foreignKey: { name: "idUser", allowNull: false },
});
Order.belongsTo(User, {
  foreignKey: { name: "idUser", allowNull: false },
});

Adress.hasMany(Order, {
  foreignKey: { name: "idAdress", allowNull: false },
});
Order.belongsTo(Adress, {
  foreignKey: { name: "idAdress", allowNull: false },
});

Product.hasMany(Order, {
  foreignKey: { name: "idProduct", allowNull: false },
});
Order.belongsTo(Product, {
  foreignKey: { name: "idProduct", allowNull: false },
});

module.exports = Order;
