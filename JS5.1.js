console.log("start");
setTimeout(() => console.log("timeout"), 0);
new Promise((resolve, reject) => {
console.log("promise constructor");
reject();
})
.then(() => console.log("p1"))
.catch(() => console.log("p2"))
.catch(() => console.log("p3"))
.then(() => console.log("p4"))
.then(() => console.log("p5"));
console.log("final");

/*В консоль выведется
  start
  promise constructor
  final
  p2
  p4
  p5

Сначала выводится "start".
Затем создается новый объект Promise и выполняется его конструктор, в результате чего выводится "promise constructor".
Затем выполняется метод reject(), который вызывает отклонение промиса.
После этого вызывается метод catch(), который перехватывает отклонение промиса и выводит "p2".
Так как был перехвачен reject(), следующие методы catch() не вызываются.
Затем вызываются методы then(), которые выводят "p4" и "p5". Обратите внимание, что даже после отклонения промиса, следующие методы then() всё равно вызываются.
Наконец, выводится "final".
*/
