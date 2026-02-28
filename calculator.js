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

function modulo(a, b) {
  if (b === 0) throw new Error('Modulo by zero');
  return a % b;
}

function power(base, exponent) {
  return base ** exponent;
}

function squareRoot(n) {
  if (n < 0) throw new Error('Cannot calculate square root of a negative number');
  return Math.sqrt(n);
}

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };

// CLI entry point
if (require.main === module) {
  const [,, operation, a, b] = process.argv;
  const x = parseFloat(a);
  const y = parseFloat(b);

  const ops = { add, subtract, multiply, divide, modulo, power, squareRoot };
  if (!ops[operation]) {
    console.error(`Unknown operation: ${operation}. Use: add, subtract, multiply, divide, modulo, power, squareRoot`);
    process.exit(1);
  }

  try {
    const isUnary = operation === 'squareRoot';
    if (Number.isNaN(x) || (!isUnary && Number.isNaN(y))) {
      console.error(`Invalid input. Usage: ${isUnary ? 'node calculator.js squareRoot <number>' : `node calculator.js ${operation} <number> <number>`}`);
      process.exit(1);
    }

    const result = isUnary ? ops[operation](x) : ops[operation](x, y);
    console.log(isUnary ? `${operation}(${x}) = ${result}` : `${operation}(${x}, ${y}) = ${result}`);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}
