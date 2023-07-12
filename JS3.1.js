function convertArrToObj(arr) {
  const obj = {};

  for (let i = 0; i < arr.length; i++) {
    obj[i] = arr[i];
  }

  return obj;
}

const arr = ['a', 'b', 'c', 'd'];
const obj = convertArrToObj(arr);
console.log(obj);
/* Вывод:
  0: 'a',
  1: 'b',
  2: 'c',
  3: 'd'
*/
