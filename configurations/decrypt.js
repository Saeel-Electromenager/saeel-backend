const CryptoJS = require("crypto-js");

require("dotenv").config();
const DECRYPT_KEY = process.env.DECRYPT_KEY;

function decrypt(encrypted) {
  var decrypted = CryptoJS.AES.decrypt(encrypted, DECRYPT_KEY).toString(
    CryptoJS.enc.Utf8
  );
  return decrypted;
}

module.exports = decrypt;
