const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  const SA = +sampleActivity; //Переводим строку в число. Если строка кривая получим NaN
  if (!isNaN(SA)) {
    //Проверяем на NaN
    Math.log(MODERN_ACTIVITY / SA) / (0.693 / HALF_LIFE_PERIOD); //Формула рассчёта
    if (!isNaN(SA)) return false;
  } // Ещё раз проверяем на NaN если с числом было всё впорядке. однако оно было отриц то из за log получим NaN
  else return false;
};
