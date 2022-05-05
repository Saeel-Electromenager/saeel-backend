const { DataTypes } = require("sequelize");
const sequelize = require("../configurations/Sequelize");

const categorySchema = {
  idCategory: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

const Category = sequelize.define("Categories", categorySchema);

module.exports = Category;
