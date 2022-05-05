const User = require("../models/User");
const Adress = require("../models/Adress");

User.hasMany(Adress, {
  foreignKey: { name: "idUser", allowNull: false },
});
