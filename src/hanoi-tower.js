const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let hanoiTower = {
    // создаем объект hanoiTower
    turns: 2 ** disksNumber - 1, // вычисление количества ходов
    seconds: Math.floor(((2 ** disksNumber - 1) * 3600) / turnsSpeed), // вычисление скорости
  };
  return hanoiTower; // возвращаем объект
};
