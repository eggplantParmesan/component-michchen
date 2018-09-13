const puppeteer = require('puppeteer');

const pageUrl = `http://localhost:9001/?id=`;

let page;
let browser;
const width = 1200;
const height = 720;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: [`--window-size=${width},${height}`]
  });
  page = await browser.newPage();
  await page.setViewport({ width, height });
});

afterAll(() => {
  browser.close();
});

// test id = 26 (color select) //
// test id = 26 (color select) //
// test id = 26 (color select) //

describe('search function', () => {
  beforeEach(async () => {
    await page.goto(`${pageUrl}26`, { waitUntil: 'networkidle2' });
  });

  test('title is correct', async () => {
    const selector = 'h3';
    const title = await page.$eval(selector, e => e.textContent);
    expect(title).toEqual('Unbranded Cotton Hat');
  });

  test('seller name is correct', async () => {
    const selector = '.MxiXHXVN2OuIKLY97g2Y7';
    const seller = await page.$eval(selector, e => e.textContent);
    expect(seller).toEqual('Kassulke and Sons');
  });

  test('used & new value/amount is correct', async () => {
    const selector = '._20ci3VS-5tLVT-qbgOCweZ a';
    const usedValue = await page.$eval(selector, e => e.textContent);
    expect(usedValue).toBe('Used & new (7) from $39.00');
  });

  test('clicking color swatch changes text after "Color:"', async () => {
    const swatchSelector = '.Z5JHBDSkel8AujRuDBGf0'; // dark slate blue swatch
    await page.click(swatchSelector);

    const labelSelector = '._1opUKoaLywTKjTXnVJDEDV';
    // const label = await page.$eval(labelSelector, e => e.textContent);
    return page.$eval(labelSelector, async e => e.textContent).then((data) => {
      expect(data).toBe('Dark Slate Blue');
    });

    // expect(label.toString()).toEqual('Dark Slate Blue');
  });
});




// test id = 7 (size select) //
// test id = 7 (size select) //
// test id = 7 (size select) //

/*
describe('search function', () => {
  beforeEach(async () => {
    await page.goto(`${pageUrl}7`, { waitUntil: 'networkidle2' });
  });

  // this is actually not implemented yet
  test('clicking size dropdown changes text after "Size:"', async () => {
    // const selector = '.Z5JHBDSkel8AujRuDBGf0';
    // await page.click(selector);
    // await page.type(selector, '4.5');
    // const div = '._3vJ9sBj-eU4CBk2FqsSihk'
  });

});
*/
