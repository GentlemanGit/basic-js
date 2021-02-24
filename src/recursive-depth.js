const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1; // начальная глубина массива
    if (Array.isArray(arr)) {
      // проверка на получение массива
      for (let item of arr) {
        if (Array.isArray(item)) {
          // проверяем наш массив на наличие массивов

          let newDepth = this.calculateDepth(item); // Присваиваем новой глубине эту же функцию (рекурсия)
          if (newDepth >= depth) {
            // увеличиваем уровень глубины, пока не просмотрим все массивы
            depth = newDepth + 1;
          }
        }
      }
      return depth;
    } else return 0;
  }
};
