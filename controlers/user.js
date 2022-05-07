const bcrypt = require("bcrypt");
const User = require("../models/User");
const Adress = require("../models/Adress");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");
const nodemailer = require("../configurations/nodemailer");

require("dotenv").config();
const RANDOM_TOKEN_SECRET = process.env.RANDOM_TOKEN_SECRET;

exports.signup = (req, res, next) => {
  if (req.body.password.length < 5) {
    res
      .status(400)
      .json({ error: "Password must be between 6 and 20 characters" });
  }
  User.create(
    {
      ...req.body,
    },
    {
      fields: [
        "username",
        "email",
        "password",
        "firstname",
        "lastname",
        "birthdate",
      ],
    }
  )
    .then(() => res.status(201).json({ message: "Utilisateur créer" }))
    .catch((error) => {
      res.status(400).json({ error: error.errors[0].message });
    });
};

exports.login = (req, res, next) => {
  User.findOne({
    where: {
      [Op.or]: [{ email: req.body.login }, { username: req.body.login }],
    },
  })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ error: "Utilisateur non trouvé !" });
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({ error: "Mot de passe incorrect !" });
          }
          res.cookie(
            "token",
            jwt.sign({ idUser: user.idUser }, RANDOM_TOKEN_SECRET, {
              expiresIn: "24h",
            }),
            {
              maxAge: 1000 * 60 * 60 * 24,
              secure: false,
              sameSite: "none",
              httpOnly: false,
            }
          );
          res.status(200).json({
            idUser: user.idUser,
            token: jwt.sign({ idUser: user.idUser }, RANDOM_TOKEN_SECRET, {
              expiresIn: "24h",
            }),
          });
        })
        .catch((error) => res.status(500).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.modify = (req, res, next) => {
  User.findOne({ where: { idUser: req.auth.idUser } })
    .then((user) => {
      if (!user)
        return res.status(404).json({ error: "Utilisateur non trouvé !" });
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({ error: "Mot de passe incorrect !" });
          }
          user
            .update(
              { ...req.body },
              { fields: ["firstname", "lastname", "birthdate"] }
            )
            .then(() =>
              res
                .status(200)
                .json({ message: "Modification effectué avec succès" })
            )
            .catch((error) => res.status(500).json({ error }));
        })
        .catch((error) => res.status(500).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.forgetPasswordSetter = (req, res, next) => {
  User.findOne({ where: { email: req.body.email } })
    .then((user) => {
      if (!user)
        return res.status(404).json({ message: "Utilisateur non trouvé" });
      const code = Math.floor(100000 + Math.random() * 1000000);
      nodemailer.resetPassword(req.body.email, code).then((mailResponse) => {
        if (mailResponse) {
          user
            .update({ resetCode: code })
            .then(() =>
              res.status(200).json({ message: "E-mail envoyé avec succès" })
            )
            .catch((error) => res.status(500).json({ error: "Erreur server" }));
        } else res.status(500).json({ error: "Erreur server" });
      });
    })
    .catch((error) => res.status(500).json({ error: error }));
};

exports.forgetPasswordGetter = (req, res, next) => {
  User.findOne({ where: { email: req.body.email } })
    .then((user) => {
      if (!user)
        return res.status(404).json({ message: "Utilisateur non trouvé" });

      if (user.resetCode.time && req.body.code === user.resetCode.code) {
        user
          .update(
            { password: req.body.password, resetCode: null },
            { fields: ["password", "resetCode"] }
          )
          .then(() =>
            res
              .status(200)
              .json({ message: "Modification effectué avec succès" })
          )
          .catch((error) => res.status(500).json({ error: "Erreur serveur" }));
      } else res.status(400).json({ error: "Code de récupération invalide" });
    })
    .catch((error) => res.status(500).json({ error: "Erreur serveur" }));
};

exports.getUser = (req, res, next) => {
  // TODO
};
