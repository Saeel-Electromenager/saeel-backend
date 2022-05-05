const bcrypt = require("bcrypt");
const User = require("../models/User");
const Adress = require("../models/Adress");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");

require("dotenv").config();
const RANDOM_TOKEN_SECRET = process.env.RANDOM_TOKEN_SECRET;

exports.signup = (req, res, next) => {
  console.log(req.body.password.length);
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
        return res.status(401).json({ error: "Utilisateur non trouvé !" });
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

exports.forgetPassword = (req, res, next) => {
  // forget password here
};

exports.addAdress = (req, res, next) => {
  // add adress here
};

exports.modifyAdress = (req, res, next) => {
  // add adress here
};

exports.deleteAdress = (req, res, next) => {
  // add adress here
};
