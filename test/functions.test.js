const { addCommas, renderPrice } = require('../client/src/components/ProductInfo.js');
const {
  truncateToDecimalPlace, randomNumFromRange, createProductQuery, createImageQuery,
} = require('../database/seed.js');

// addCommas()

test('Adds comma to after the first digit in 1000', () => {
  expect(addCommas(1000)).toBe('1,000');
});

test('Adds comma every three digits', () => {
  expect(addCommas(1234567890)).toBe('1,234,567,890');
});

test('Does not add comma to value < 1000', () => {
  expect(addCommas(123)).toBe('123');
});

// renderPrice()

test('Renders price with two decimal places', () => {
  expect(renderPrice(123.45678)).toBe('$123.46');
});

test('Renders price less than 1 dollar', () => {
  expect(renderPrice(0.123)).toBe('$0.12');
});

test('Renders price, with trailing 0s if it\'s a round number', () => {
  expect(renderPrice(1000)).toBe('$1,000.00');
});

// truncateToDecimalPlace()

test('truncateToDecimalPlace', () => {
  expect(truncateToDecimalPlace(3.14159265359, 2)).toBe(3.14);
});

// test('randomNumFromRange', () => {
//   expect(randomNumFromRange()).toBe();
// });

test('createProductQuery', () => {
  expect(typeof createProductQuery(3)).toBe('string');
});

test('createImageQuery', () => {
  expect(typeof createImageQuery(3)).toBe('string');
});
