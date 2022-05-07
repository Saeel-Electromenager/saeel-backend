const listWilaya = require("../configurations/wilayas");

exports.getDaira = (wilaya) => {
  const getWilaya = listWilaya.filter((wilayas) => {
    return wilayas.wilaya === wilaya;
  });
  if (getWilaya)
    return getWilaya[0].dairas.map((element) => {
      return element.daira;
    });
  return null;
};

exports.getCommune = (wilaya, daira) => {
  const getWilaya = listWilaya.filter((wilayas) => {
    return wilayas.wilaya === wilaya;
  });
  if (getWilaya.length) {
    const getDaira = getWilaya[0].dairas.filter((dairas) => {
      return dairas.daira === daira;
    });
    if (getDaira.length) return getDaira[0].commune;
  }
  return null;
};
