const { DataTypes } = require("sequelize");
const sequelize = require("../configurations/Sequelize");
const bcrypt = require("bcrypt");

const userSchema = {
  idUser: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    unique: {
      args: true,
      msg: "Username already in use!",
    },
    allowNull: false,
    validate: {
      isAlphanumeric: true,
      notNull: {
        args: false,
        msg: "Username cannot be nul",
      },
    },
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        args: false,
        msg: "firstname cannot be nul",
      },
    },
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        args: false,
        msg: "Lastname cannot be nul",
      },
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
      args: true,
      msg: "Email address already in use!",
    },
    validate: {
      isEmail: {
        args: true,
        msg: "It's not a valid email",
      },
      notNull: {
        args: false,
        msg: "Email cannot be nul",
      },
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    set(value) {
      this.setDataValue("password", bcrypt.hashSync(value, 10));
    },
  },
  birthdate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  type: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    isIn: [[0, 1, 2, 3]],
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 0,
    isIn: [[0, 1, 2]], // ["Email not confirmed", "Account validated", "Account banned"]
  },
};
const User = sequelize.define("Users", userSchema);
module.exports = User;
