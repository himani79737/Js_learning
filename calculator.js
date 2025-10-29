// Simple Calculator
const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    return b !== 0 ? a / b : "Cannot divide by zero";
  }
};

console.log(calculator.add(5, 3));       // 8
console.log(calculator.divide(10, 2));   // 5
