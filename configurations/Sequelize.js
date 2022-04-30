const { Sequelize } = require("sequelize");

// Récupération des données sensibes
require("dotenv").config();
const USER_ID = process.env.USER_ID;
const USER_KEY = process.env.USER_KEY;
const DB_NAME = process.env.DB_NAME;
const HOST_NAME = process.env.HOST_NAME;
const HOST_PORT = process.env.HOST_PORT;

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
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

(async () => {
  await sequelize
    .sync({ force: false })
    .then((res) => console.log("Table crée avec succès"))
    .catch((err) => console.log(err));
  // Code here
})();

module.exports = sequelize;
