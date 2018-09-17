exports.addCommas = function addCommas(num) {
  const numStr = String(num);
  let result = '';

  for (let i = numStr.length; i > 0; i -= 3) {
    if (i > 3) {
      const threeDigits = numStr.slice(i - 3, i);
      result = `,${threeDigits + result}`;
    } else {
      const threeDigits = numStr.slice(0, i);
      result = threeDigits + result;
    }
  }
  return result;
};

function shortenCents(cents) {
  let centsAsInt = Math.round(cents * 100);
  if (centsAsInt < 10) {
    centsAsInt = `0${centsAsInt}`;
  }
  return centsAsInt;
}

exports.renderPrice = function renderPrice(num) {
  const dollars = Math.floor(num);
  const cents = num % 1;
  return `$${exports.addCommas(dollars)}.${shortenCents(cents)}`;
};

exports.savedPercent = function savedPercent(priceList, price) {
  return Math.round(((priceList - price) / priceList) * 100);
};
