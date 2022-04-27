const { Sequelize } = require("sequelize");

// Récupération des données sensibes
require('dotenv').config();
const USER_ID = rocess.env.USER_ID;
const USER_KEY = rocess.env.USER_KEY;
const DB_NAME = rocess.env.DB_NAME;
const HOST_NAME = rocess.env.HOST_NAME;
const HOST_PORT = rocess.env.HOST_PORT;

const sequelize = new Sequelize(DB_NAME, USER_ID, USER_KEY, {
  dialect: "mariadb",
  dialectOptions: {
    host: HOST_NAME,
    port: HOST_PORT,
    dialect: "mariadb",
    operatorsAliases: false,
    pool: { max: 5, min: 0, acquire: 30000, idle: 10000 },
  },
});

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

module.exports = sequelize;