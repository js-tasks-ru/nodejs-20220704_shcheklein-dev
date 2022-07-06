function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Переданы не числа');
  }
  return Number(a) + Number(b);
}

module.exports = sum;
