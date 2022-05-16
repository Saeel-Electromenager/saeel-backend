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
  image: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue:
      "https://www.kindpng.com/picc/m/451-4517876_default-profile-hd-png-download.png",
  },
  birthdate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  type: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    validate: {
      isIn: [[0, 1, 2, 3]], // ["Simple user", "Fournisseur", "Modérateur", "Administrator"]
    },
  },
  status: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    validate: {
      isIn: [[0, 1, 2]], // ["Email not confirmed", "Account validated", "Account banned"]
    },
  },
  confirmEmailCode: {
    type: DataTypes.STRING,
    defaultValue: null,
    set(value) {
      const code = value ? new Date().getTime() + "#" + value : null;
      this.setDataValue("confirmEmailCode", code);
    },
    get() {
      let time, code;
      if (!this.getDataValue("confirmEmailCode")) {
        time = false;
        code = null;
      } else {
        time = this.getDataValue("confirmEmailCode").split("#")[0];
        code = this.getDataValue("confirmEmailCode").split("#")[1];
        time = new Date().getTime() - parseInt(time) < 600000;
        code = parseInt(code);
      }
      return {
        time: time,
        code: code,
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
      let time, code;
      if (!this.getDataValue("resetCode")) {
        time = false;
        code = null;
      } else {
        time = this.getDataValue("resetCode").split("#")[0];
        code = this.getDataValue("resetCode").split("#")[1];
        time = new Date().getTime() - parseInt(time) < 600000;
        code = parseInt(code);
      }
      return {
        time: time,
        code: code,
      };
    },
  },
};

const User = sequelize.define("User", userSchema);
module.exports = User;
