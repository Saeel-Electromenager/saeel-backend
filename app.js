const express = require("express");
const path = require("path");

const categoryRoutes = require("./routes/category");
const userRoutes = require("./routes/user");
const adressRoutes = require("./routes/adress");
const productRoutes = require("./routes/product");
const orderRoutes = require("./routes/order");
const favoriteRoutes = require("./routes/favorite");
const User = require("./models/User");

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
app.use("/api/favorite", favoriteRoutes);

app.post("/api/test/", async (req, res, next) => {
  const data = req.body;
  try {
    data.password = await bycript.hash(data.password, 10);
    await User.create(data);
    res.status(200).json({ message: "OK" });
  } catch (error) {
    res.status(500).json({ error: "error" });
  }
});

module.exports = app;
