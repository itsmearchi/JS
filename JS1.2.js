const a = () => console.log("a");
const b = () => console.log("b");
const c = a || b ? a() : b();
console.log(c);
/*
При выполнении строки const c = a || b ? a() : b(); 
происходит проверка условия a || b. 
Поскольку a является функцией и функции в JavaScript являются истинными значениями, 
условие будет истинным и будет вызвана функция a(). В результате будет выведено "a" в консоль.

Однако, функция a() не возвращает никакого значения (возвращает undefined). 
Поэтому значение переменной c будет равно undefined. 
В результате будет выведено undefined в консоль при выполнении console.log(c).
*/