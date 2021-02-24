const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (Array.isArray(arr)) {// проверка на массив
    let arrStr = [...arr];// переводим в массив строк. для правильного вывода
    let item = 0;//номер элемента массива

    for (let i = 0; i < arrStr.length; i++) {//проходим массив
      if (arr[i] === "--double-next") {
        item = i;
        arrStr.splice(item, 1, arr[item + 1]);// вырезаем "--double-next" и дублируем следующий элемент
      }
      if (arr[i] === "--double-prev") {
        item = i;
        arrStr.splice(item, 1, arrStr[item - 1]);// вырезаем "--double-prev" и дублируем предыдущий элемент
      }
      if (arr[i] === "--discard-prev") {
        if (i > 0) {// проверка на то что элемент не первый
          item = i - 1;
          arrStr.splice(item, 1, undefined);// вырезаем "--discard-prev" и заменяем на undefined
        }
      }
      if (arr[i] === "--discard-next") {
        if (i < arr.length) {// проверка на то что элемент не последний
          item = i + 1;
          arrStr.splice(item, 1, undefined);// вырезаем "--discard-next" и заменяем на undefined
        }
      }
    }
    let Transform_array = arrStr.filter(// проверка на правильность выполнения программы. И удаление лишнего мусора
      (item) =>
        item !== undefined &&
        item !== "--discard-next" &&
        item !== "--discard-prev" &&
        item !== "--double-prev" &&
        item !== "--double-next"
    );
    return Transform_array;
  } else throw Error("arr is not an Array");// вывод ошибки
};
