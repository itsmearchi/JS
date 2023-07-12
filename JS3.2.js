function countFromArr(arr) {
  const countObj = {};

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (countObj[element]) {
      countObj[element] += 1;
    } else {
      countObj[element] = 1;
    }
  }

  return countObj;
}

const arr = ['a', 'b', 'a', 'c', 'b', 'a'];
const countObj = countFromArr(arr);
console.log(countObj);

/*Вывод:
  'a': 3,
  'b': 2,
  'c': 1
*/
