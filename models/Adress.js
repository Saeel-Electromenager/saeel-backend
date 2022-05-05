const { DataTypes } = require("sequelize");
const sequelize = require("../configurations/Sequelize");
const User = require("./User");

const adressSchema = {
  idAdress: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  idUser: {
    type: DataTypes.INTEGER,
    references: {
      model: "users",
      key: "idUser",
    },
  },
  wilaya: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  adress: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

const Adress = sequelize.define("Adress", adressSchema);

User.hasMany(Adress, {
  foreignKey: { name: "idUser", allowNull: false },
});

module.exports = Adress;
