function getType(arg) {
  return typeof arg;
}
console.log(getType(5)); // Вывод: "number"
console.log(getType("Hello")); // Вывод: "string"
console.log(getType(true)); // Вывод: "boolean"
console.log(getType([])); // Вывод: "object"
console.log(getType(null)); // Вывод: "object"
console.log(getType(undefined)); // Вывод: "undefined"
