// add a comma every three places e.g. 1,000
// used for review and questions counts
export function addComma(num) {
  return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function renderPrice(num) {
  let newNum = Math.round(num * 100) / 100;

  if (newNum % 1 === 0) {
    // add .00 to a price if it has no decimals
    newNum += '.00';
  } else if ((newNum * 10) % 1 === 0) {
    // otherwise if there's a single-digit decimal, append a 0
    newNum += '0';
  }

  return `$${newNum}`;
}
