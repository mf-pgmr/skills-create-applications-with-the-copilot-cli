const { add, subtract, multiply, divide } = require('./calculator');

// Addition
console.assert(add(5, 3) === 8,        'add(5, 3) should be 8');
console.assert(add(-1, 1) === 0,       'add(-1, 1) should be 0');
console.assert(add(0, 0) === 0,        'add(0, 0) should be 0');

// Subtraction
console.assert(subtract(10, 4) === 6,  'subtract(10, 4) should be 6');
console.assert(subtract(0, 5) === -5,  'subtract(0, 5) should be -5');

// Multiplication
console.assert(multiply(6, 7) === 42,  'multiply(6, 7) should be 42');
console.assert(multiply(0, 100) === 0, 'multiply(0, 100) should be 0');

// Division
console.assert(divide(20, 4) === 5,    'divide(20, 4) should be 5');
console.assert(divide(9, 3) === 3,     'divide(9, 3) should be 3');

// Division by zero
try {
  divide(5, 0);
  console.assert(false, 'divide(5, 0) should throw');
} catch (e) {
  console.assert(e.message === 'Division by zero', 'Should throw "Division by zero"');
}

console.log('All tests passed!');
