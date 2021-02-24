const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let arr = []; // Будущий массив массивов. Нужен для ввода внего массивов из букв имён
  let team = []; // Массив заглавных букв имён
  if (Array.isArray(members)) {
    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] === "string") arr.push(members[i].trim().split("")); // если это строка, чистим её от пробелов и добавляем её в массив разделив на массив букв
    }
    for (let member of arr) {
      team.push(member[0].toUpperCase()); //делаем первую букву заглавной и добавляем в массив букв имен
    }
    let str = team.sort().join(""); // сортируем и переводим в строку
    return str;
  } else return false;
};
