const express = require("express");
const path = require("path");

const categoryRoutes = require("./routes/category");
const userRoutes = require("./routes/user");
const adressRoutes = require("./routes/adress");
const productRoutes = require("./routes/product");
const orderRoutes = require("./routes/order");

const app = express();
app.use(express.json());

// Le header pour le CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization, Authorization2"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

// Les routes

// indiquer que le dossier image est statique à fin de permetre l'acces via URL
app.use("/images", express.static(path.join(__dirname, "images")));

// pour la route /api/auth/
app.use("/api/user", userRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/adress", adressRoutes);
app.use("/api/product", productRoutes);
app.use("/api/order", orderRoutes);

app.get("/api/test/", (req, res, next) => {
  const Category = require("./models/Category");
  const Product = require("./models/Product");
  const sequelize = require("./configurations/Sequelize");
  Category.findAll({
    attributes: [
      // [sequelize.fn("COUNT", sequelize.col("idProduct")), "n_hats"],
      "name",
      [
        sequelize.literal(
          "(SELECT COUNT(*) FROM Products WHERE Products.idProduct = Category.idCategory)"
        ),
        "numberOfProduct",
      ],
    ],
    group: "idCategory",
    order: [[sequelize.literal("numberOfProduct"), "DESC"]],
  })
    .then((data) => res.status(200).json(data))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "error" });
    });
});

module.exports = app;
