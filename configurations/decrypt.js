const CryptoJS = require("crypto-js");

const SECURITY_KEY =
  "5wsVKLkVFT6aAPcmTJP7432t5s54zWc86DUB5FP4ws98BQS95t2ZGcsek49Mea3PsVp99UCG6UrcJr8wDwxr7pCqxqSsR5R6LP97YFPvJ9j2er9u24pBnMn4y866c2p9v7763N";

function decrypt(encrypted) {
  var decrypted = CryptoJS.AES.decrypt(encrypted, SECURITY_KEY).toString(
    CryptoJS.enc.Utf8
  );
  return decrypted;
}

module.exports = decrypt;
