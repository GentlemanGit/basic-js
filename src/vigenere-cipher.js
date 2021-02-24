const CustomError = require("../extensions/custom-error");
class VigenereCipheringMachine {
  //Класс машины шифрования
  direct = true; // Метод Прямого типа машины. По умолчанию
  constructor(typeMachine) {
    //Конструктор определяющий тип машины
    if (typeMachine === false) {
      this.direct = false; // Если получено False - машина реверсивная
    }
  }
  encrypt(message, key) {
    //Метод шифрования
    if (message == "" || key == "") throw Error("Incorrect data"); // Вывод ошибки при некоректных данных
    message = message.toUpperCase(); //Перевод в верхний регистр сообщения
    key = key.toUpperCase(); //Перевод в верхний регистр ключа
    let arr = []; // Массив для вывода
    for (let i = 0, j = 0; i < message.length; i++) {
      // Формула шифрования. Рабатаем с символами юникода
      if (j == key.length) j = 0;
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
        let ch = (message.charCodeAt(i) - 65 + key.charCodeAt(j) - 65) % 26;
        arr.push(String.fromCharCode(ch + 65)); // закидываем в массив
        j++;
      } else {
        arr.push(message[i]); // закидываем в массив
      }
    }
    if (!this.direct) arr.reverse(); // если реверсивная машина. ТО реверсируем полученный шифр
    return arr.join(""); // Вывод шифра
  }
  decrypt(encryptedMessage, key) {
    //Метод дешифрования
    if (encryptedMessage == "" || key == "") throw Error("Incorrect data"); // Вывод ошибки при некоректных данных
    let message = encryptedMessage.toUpperCase(); //Перевод в верхний регистр шифра
    key = key.toUpperCase(); //Перевод в верхний регистр ключа
    let arr = []; // Массив для вывода
    for (let i = 0, j = 0; i < message.length; i++) {
      // Формула дешифрования. Рабатаем с символами юникода
      if (j == key.length) j = 0;
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
        let ch =
          (message.charCodeAt(i) - 65 - (key.charCodeAt(j) - 65) + 26) % 26;
        arr.push(String.fromCharCode(ch + 65)); // закидываем в массив
        j++;
      } else {
        arr.push(message[i]); // закидываем в массив
      }
    }
    if (!this.direct) arr.reverse(); // если реверсивная машина. ТО реверсируем полученную строку
    return arr.join(""); // Вывод строки
  }
}
module.exports = VigenereCipheringMachine;
