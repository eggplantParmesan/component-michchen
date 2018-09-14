import {addComma, renderPrice} from '../client/src/components/ProductInfo.js';

const sum = require('./sum');

describe('sum suite', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});

// describe('addComma', () => {
//   test('adds a comma to "3000"', () => {
//     expect(addComma(3000)).toBe('3,000');
//   })
// })

// addComma
// renderPrice
