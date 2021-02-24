const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let r = 1; // количество повторений str. 1 т.к. строка должна быть хоть раз
  if (options.repeatTimes !== undefined) r = options.repeatTimes; // количество повторений str
  let s = "+"; // разделитель str
  if (options.separator !== undefined) s = options.separator; // разделитель str
  let a = ""; // подстрока
  if (options.addition !== undefined) a = options.addition; // подстрока
  let aR = 1; // количество повторений подстроки. 1 т.к. подстрока должна быть хоть раз
  if (options.additionRepeatTimes !== undefined)
    aR = options.additionRepeatTimes; // количество повторений подстроки
  let aS = "|"; // разделитель подстроки
  if (options.additionSeparator !== undefined) aS = options.additionSeparator; // разделитель подстроки
  let newStr = ""; // Новая строка
  if (r > 0) {
    for (let i = 0; i < r; i++) {
      newStr += str;
      for (let j = 0; j < aR; j++) {
        newStr += a;
        if (j < aR - 1) newStr += aS;
      }
      if (i < r - 1) newStr += s;
    }
  }
  return newStr;
};
