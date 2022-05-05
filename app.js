const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");

const userRoutes = require("./routes/user");

const app = express();
app.use(express.json());
app.use(cookieParser());

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
app.use("/api/category", userRoutes);

app.get("/api/setCookie", (req, res, next) => {
  res.setHeader("set-cookie", [
    "cookie1=value1; SameSite=Lax",
    "cookie2=value2; SameSite=None; Secure",
  ]);
  res.status(200).json({ message: "Succes" });
});
module.exports = app;
