const functions = require('./functions');
const { addComma, renderPrice } = require('../client/src/components/ProductInfo.js');

test('Adds 2 + 2 to equal 4', () => {
  expect(functions.sum(2, 2)).toBe(4);
});

test('Adds comma to after the first digit in 1000', () => {
  expect(addComma(1000)).toBe('1,000');
});

test('Renders a number as a proper price', () => {
  expect(renderPrice(1000)).toBe('$1,000.00');
});
