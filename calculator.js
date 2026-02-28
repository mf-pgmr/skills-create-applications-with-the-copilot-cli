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
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}

module.exports = { add, subtract, multiply, divide };

// CLI entry point
if (require.main === module) {
  const [,, operation, a, b] = process.argv;
  const x = parseFloat(a);
  const y = parseFloat(b);

  const ops = { add, subtract, multiply, divide };
  if (!ops[operation]) {
    console.error(`Unknown operation: ${operation}. Use: add, subtract, multiply, divide`);
    process.exit(1);
  }

  try {
    const result = ops[operation](x, y);
    console.log(`${operation}(${x}, ${y}) = ${result}`);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}
