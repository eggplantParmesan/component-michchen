const puppeteer = require('puppeteer');

const pageUrl = 'http://localhost:9001';

beforeAll(async() => {
  browser = await puppeteer.launch({

  });
})
