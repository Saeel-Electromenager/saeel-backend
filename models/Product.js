const { DataTypes } = require("sequelize");
const sequelize = require("../configurations/Sequelize");
const Category = require("./Category");
const User = require("./User");

const productSchema = {
  idProduct: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  idCategory: {
    type: DataTypes.INTEGER,
    references: {
      model: "Categories",
      key: "idCategory",
    },
  },
  idProvider: {
    type: DataTypes.INTEGER,
    references: {
      model: "Users",
      key: "idUser",
    },
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  model: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
    },
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  discount: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
    },
    set(value) {
      value < 0 ? (value = 0) : "";
      this.setDataValue("quantity", value);
    },
  },
  title: {
    type: DataTypes.VIRTUAL,
    get() {
      return `${this.Category.name} ${this.brand} ${this.model}`;
    },
  },
};

const Product = sequelize.define("Product", productSchema);

Category.hasMany(Product, {
  foreignKey: { name: "idCategory", allowNull: false },
});
Product.belongsTo(Category, {
  foreignKey: { name: "idCategory", allowNull: false },
});

User.hasMany(Product, {
  foreignKey: { name: "idProvider", allowNull: false },
});
Product.belongsTo(User, {
  foreignKey: { name: "idProvider", allowNull: false },
});

module.exports = Product;
