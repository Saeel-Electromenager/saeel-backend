const { DataTypes } = require("sequelize");
const sequelize = require("../configurations/Sequelize");


const userSchema = {
  // TODO: data structure here
};

module.exports = sequelize.define('users', userSchema);