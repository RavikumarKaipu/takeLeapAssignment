// Map
const numbers = [1, 2, 3, 4];
const squared = numbers.map(num => num * num);
console.log('Squared:', squared);

// Reduce
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log('Sum:', sum);

// Filter
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log('Even Numbers:', evenNumbers);

// FlatMap
const nestedArrays = [[1, 2], [3, 4]];
const flattened = nestedArrays.flatMap(arr => arr);
console.log('Flattened:', flattened);
