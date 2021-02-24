const CustomError = require("../extensions/custom-error");
module.exports = function countCats(backyard) {
  let cat = 0;// начальный счётчик котиков
  for (let i = 0; i < backyard.length; i++) {
    // для каждого подмассива выполняем условие. Если есть ушки увеличиваем счётчик
    backyard[i].map((item) => {
      if (item === "^^") cat++;
    });
  }
  return cat;
};
