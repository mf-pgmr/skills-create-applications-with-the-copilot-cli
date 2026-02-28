const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../../calculator');

describe('calculator operations', () => {
  describe('addition', () => {
    test('adds two positive numbers (image example: 2 + 3)', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('adds negative and positive numbers', () => {
      expect(add(-4, 10)).toBe(6);
    });

    test('adds zeros', () => {
      expect(add(0, 0)).toBe(0);
    });
  });

  describe('subtraction', () => {
    test('subtracts two numbers (image example: 10 - 4)', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('returns a negative result when minuend is smaller', () => {
      expect(subtract(4, 10)).toBe(-6);
    });

    test('subtracts negative values', () => {
      expect(subtract(-2, -3)).toBe(1);
    });
  });

  describe('multiplication', () => {
    test('multiplies two numbers (image example: 45 * 2)', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test('returns zero when one input is zero', () => {
      expect(multiply(45, 0)).toBe(0);
    });

    test('multiplies two negative numbers', () => {
      expect(multiply(-3, -7)).toBe(21);
    });
  });

  describe('division', () => {
    test('divides two numbers (image example: 20 / 5)', () => {
      expect(divide(20, 5)).toBe(4);
    });

    test('divides to a decimal result', () => {
      expect(divide(7, 2)).toBe(3.5);
    });

    test('throws for division by zero', () => {
      expect(() => divide(20, 0)).toThrow('Division by zero');
    });
  });

  describe('modulo', () => {
    test('returns remainder (image example: 5 % 2)', () => {
      expect(modulo(5, 2)).toBe(1);
    });

    test('returns zero when divisible', () => {
      expect(modulo(10, 5)).toBe(0);
    });

    test('throws for modulo by zero', () => {
      expect(() => modulo(10, 0)).toThrow('Modulo by zero');
    });
  });

  describe('power', () => {
    test('raises base to exponent (image example: 2 ^ 3)', () => {
      expect(power(2, 3)).toBe(8);
    });

    test('returns 1 for exponent 0', () => {
      expect(power(9, 0)).toBe(1);
    });

    test('supports negative exponents', () => {
      expect(power(2, -2)).toBe(0.25);
    });
  });

  describe('square root', () => {
    test('calculates square root (image example: √16)', () => {
      expect(squareRoot(16)).toBe(4);
    });

    test('returns 0 for square root of 0', () => {
      expect(squareRoot(0)).toBe(0);
    });

    test('throws for negative numbers', () => {
      expect(() => squareRoot(-16)).toThrow('Cannot calculate square root of a negative number');
    });
  });
});
