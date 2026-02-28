#!/usr/bin/env node

// Supported operations: addition (+), subtraction (-), multiplication (*), division (/).
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

function calculate(operation, a, b) {
  const operations = { add, subtract, multiply, divide };
  const fn = operations[operation];

  if (!fn) {
    throw new Error(`Unknown operation: ${operation}. Use add, subtract, multiply, or divide.`);
  }

  return fn(a, b);
}

module.exports = { add, subtract, multiply, divide, calculate };

if (require.main === module) {
  const [, , operation, left, right] = process.argv;
  const a = Number(left);
  const b = Number(right);

  if (!operation || Number.isNaN(a) || Number.isNaN(b)) {
    console.error('Usage: node src/calculator.js <add|subtract|multiply|divide> <number> <number>');
    process.exit(1);
  }

  try {
    console.log(calculate(operation, a, b));
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}
