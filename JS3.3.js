function groupByField(arr, fieldName) {
  const groupedObj = {};

  for (let i = 0; i < arr.length; i++) {
    const obj = arr[i];
    const fieldValue = obj[fieldName];

    if (!groupedObj[fieldValue]) {
      groupedObj[fieldValue] = [];
    }

    groupedObj[fieldValue].push(obj);
  }

  return groupedObj;
}

const data = [
  { id: 1, category: 'A' },
  { id: 2, category: 'B' },
  { id: 3, category: 'A' },
  { id: 4, category: 'C' },
  { id: 5, category: 'B' }
];

const groupedData = groupByField(data, 'category');
console.log(groupedData);

/*Вывод:
'A': [
    { id: 1, category: 'A' },
    { id: 3, category: 'A' }
  ],
  'B': [
    { id: 2, category: 'B' },
    { id: 5, category: 'B' }
  ],
  'C': [
    { id: 4, category: 'C' }
  ]
*/
