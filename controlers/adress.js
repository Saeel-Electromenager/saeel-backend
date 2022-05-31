const Adress = require("../models/Adress");

exports.addAdress = (req, res, next) => {
  Adress.create(
    {
      ...req.body,
      idUser: req.auth.idUser,
    },
    { fields: ["idUser", "wilaya", "daira", "commune", "adress", "phone"] }
  )
    .then(() => res.status(201).json({ message: "Adresse ajouté avec succès" }))
    .catch((error) => res.status(500).json({ error: "Error server" }));
};

exports.modifyAdress = (req, res, next) => {
  Adress.findOne({ where: { idAdress: req.body.idAdress } })
    .then((adress) => {
      if (!adress) res.status(404).json({ error: "Adresse introuvable" });
      if (req.auth.idUser !== adress.idUser)
        res.status(401).json({ message: "Droit d'accès nécessaire" });
      adress
        .update(
          {
            ...req.body,
          },
          { fields: ["wilaya", "daira", "commune", "adress", "phone"] }
        )
        .then(() =>
          res.status(200).message({ message: "Adresse modifié avec succès" })
        )
        .catch(() => res.status(500).json({ error: "Erreur server" }));
    })
    .catch(() => res.status(500).json({ error: "Erreur server" }));
};

exports.deleteAdress = (req, res, next) => {
  Adress.findOne({ where: { idAdress: req.body.idAdress } })
    .then((adress) => {
      if (!adress) res.status(404).json({ error: "Adresse introuvable" });
      if (req.auth.idUser !== adress.idUser)
        res.status(401).json({ message: "Droit d'accès nécessaire" });
      adress
        .destroy()
        .then(() =>
          res.status(200).message({ message: "Adresse supprimé avec succès" })
        )
        .catch(() => res.status(500).json({ error: "Erreur server" }));
    })
    .catch(() => res.status(500).json({ error: "Erreur server" }));
};

exports.getAdress = (req, res, next) => {
  Adress.findAll({ where: { idUser: req.auth.idUser } })
    .then((adresses) => {
      if (adresses.length < 1)
        return res.status(404).json({ error: "Aucune adresse trouvé" });
      return res.status(200).json(adresses);
    })
    .catch((error) => {
      res.status(500).json({ error: "error server" });
    });
};
