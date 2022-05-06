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
        msg: "Firstname cannot be nul",
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
    isIn: [[0, 1, 2, 3]], // ["Simple user", "Fournisseur", "Modérateur", "Administrator"]
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 0,
    isIn: [[0, 1, 2]], // ["Email not confirmed", "Account validated", "Account banned"]
  },
  confirmEmailCode: {
    type: DataTypes.STRING,
    defaultValue: null,
    set(value) {
      this.setDataValue(
        "confirmEmailCode",
        new Date().getTime() + " # " + value
      );
    },
    get() {
      const time = this.getDataValue("confirmEmailCode").split(" # ")[0];
      const code = this.getDataValue("confirmEmailCode").split(" # ")[1];
      return {
        time: new Date().getTime() - parseInt(time) < 1200000,
        code: parseInt(code),
      };
    },
  },
  resetCode: {
    type: DataTypes.STRING,
    defaultValue: null,
    set(value) {
      const codeWithTime = value ? new Date().getTime() + " # " + value : null;
      this.setDataValue("resetCode", codeWithTime);
    },
    get() {
      const time = this.getDataValue("resetCode").split(" # ")[0];
      const code = this.getDataValue("resetCode").split(" # ")[1];
      return {
        time: new Date().getTime() - parseInt(time) < 600000,
        code: parseInt(code),
      };
    },
  },
};

const User = sequelize.define("Users", userSchema);
module.exports = User;
