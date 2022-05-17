const User = require("../models/User");

module.exports = (req, res, next) => {
  User.findOne({ where: { idUser: req.auth.idUser } })
    .then((admin) => {
      console.log(admin);
      if (!!admin && admin.type > 1) {
        req.auth.type = admin.type;
        next();
      } else return res.status(401).json({ error: "Demande non autorisé" });
    })
    .catch(() => {
      res.status(500).json({ error: "Erreur server" });
    });
};
