const fruits = ['Pommes', 'Poires'];
const fruits_alt = ['Kiwis', 'Fraises'];
console.log(fruits);
console.log(fruits_alt);

const fruits_merge = ['oranges', ...fruits, ...fruits_alt, 'Ananas'];
console.log(fruits_merge);