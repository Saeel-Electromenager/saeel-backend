const express = require("express");



const app = express();
app.use(express.json());

// Le header pour le CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

// Les routes

// indiquer que le dossier image est statique à fin de permetre l'acces via URL
app.use('/images', express.static(path.join(__dirname, 'images')));

// pour la route /api/auth/
app.use('/api/auth', userRoutes);

module.exports = app;