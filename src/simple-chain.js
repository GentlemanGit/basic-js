const CustomError = require("../extensions/custom-error");

const chainMaker = {
chain: [],
getLength() {//вывести длинну цепочки
return this.chain.length;
},
addLink(value) {//добавить в цепочку
this.chain.push("" + value);
return this;
},
removeLink(position) {//удалить из цепочки
if (position === 0 || position > this.chain.length) {// проверка на первый или последний элемент
this.chain.splice(0);
throw "Error";
}
this.chain.splice(position - 1, 1);
return this;
},
reverseChain() {// развернуть цепочку
this.chain.reverse();
return this;
},
finishChain() {// закончить цепочку
const output = this.chain.map(e => `( ${e} )`).join('~~');
this.chain.splice(0);
return output;
}
};

module.exports = chainMaker;
