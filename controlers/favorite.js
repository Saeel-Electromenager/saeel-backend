const Favorite = require("../models/Favorite");

exports.modifyFavorite = (req, res, next) => {
  Favorite.findOne({
    where: { idProduct: req.body.idProduct, idUser: req.auth.idUser },
  })
    .then((favorite) => {
      if (favorite) {
        if (req.body.status)
          return res
            .status(201)
            .json({ message: "Ajouté a la liste des favories" });
        else {
          favorite.destroy();
          return res.status(200).json({ message: "Supprimer avec succès" });
        }
      } else {
        console.log(req.auth.idUser);
        Favorite.create({
          idUser: req.auth.idUser,
          idProduct: req.body.idProduct,
        })
          .then((fav) => console.log(fav))
          .catch((error) => console.log(error));
        return res.status(200).json({ message: "Crée avec succès" });
      }

      res.status(200).json({ message: "Ok!" });
    })
    .catch((error) => {
      console.log(error);
      res.status(200).json({ error: "Erreur server" });
    });
};

exports.getFavorites = (req, res, next) => {
  Favorite.findAll({
    where: { idUser: req.auth.idUser },
    attributes: ["idProduct"],
  }).then((products) => {
    res.status(200).json(products);
  });
};
