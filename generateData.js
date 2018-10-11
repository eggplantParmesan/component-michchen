const fs = require('fs');
const cats = require('./cats');
const faker = require('faker');
const db = require('./db');

const variations = [
  {
    category: 'color',
    data: ['Medium Spring Green', 'Coral', 'Lawn Green', 'Yellow', 'Orange', 'Light Steel Blue', 'Fire Brick', 'Light Grey', 'Dark Goldenrod', 'Burly Wood', 'Dark Slate Blue', 'Cornflower Blue', 'Powder Blue', 'Dark Blue', 'Dark Slate Gray', 'Maroon', 'Silver', 'Light Salmon', 'Seashell', 'Medium Sea Green'],
  }, {
    category: 'size',
    data: [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
  },
];

exports.truncateToDecimalPlace = function truncateToDecimalPlace(num, places) {
  let placesCopy = places || 0;
  placesCopy = 10 ** placesCopy;
  return Math.round(num * placesCopy) / placesCopy;
};

exports.randomNumFromRange = function randomNumFromRange(
  lowerBound, upperBound, growthRate, decimalPlaces
) {
  let growthRateCopy;
  if (growthRate === undefined || growthRate === 'exp') {
    // more low numbers
    growthRateCopy = 2;
  } else if (growthRate === 'log') {
    // more high numbers. a higher denominator means on average higher nums are generated
    growthRateCopy = 1 / 1.5;
  }
  return exports.truncateToDecimalPlace((Math.random() ** growthRateCopy)
        * (upperBound - lowerBound) + lowerBound, decimalPlaces);
};

exports.renderSubArrayString = function renderSubArray(array) {
  const randStart = Math.round(Math.random() * (array.length / 2));
  const maxItems = 5;
  const randEnd = randStart + Math.ceil(Math.random() * maxItems);
  return array.slice(randStart, randEnd).join('-');
};

exports.getRandomIntInclusive = function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; // The maximum is inclusive and the minimum is inclusive
};

// generate a random sequence of departments for breadcrumb
exports.renderDepartments = function renderDepartments() {
  let departments = [];
  const times = Math.round(Math.random() * 4) + 1;
  Array(times).fill('').forEach(() => {
    departments.push(`${faker.commerce.department()}`);
  });
  return departments.join('-');
};

exports.generateIndividualObject = (id) => {
  const categoryObj = variations[Math.round(Math.random())];
  // loop through a few items at a random section of the array

  const listPrice = (exports.randomNumFromRange(1.99, 3024.99) * 100) / 100;

  // price is between 80% to 95% of the list price
  const price = listPrice * (exports.randomNumFromRange(80, 95) / 100);

  // used price is between 50% to 95% of the price
  const usedPrice = price * (exports.randomNumFromRange(50, 95) / 100);

  return `${id} | Egg ${id} | ${faker.company.companyName()} | ${exports.randomNumFromRange(0.5, 5, 'log', 1)} | ${exports.randomNumFromRange(5, 1000)} | ${exports.randomNumFromRange(2, 30, 'log')} | ${exports.randomNumFromRange(0, 1)} | ${exports.renderDepartments()} | ${exports.truncateToDecimalPlace(listPrice, 2)} | ${exports.truncateToDecimalPlace(price, 2)} | ${exports.randomNumFromRange(0, 1)} | ${exports.randomNumFromRange(0, 1)} | ${faker.company.companyName()} | ${exports.randomNumFromRange(0, 1, 'log')} | ${exports.randomNumFromRange(0, 1)} | ${faker.lorem.lines().replace(/\n/g, '\\n')} | ${exports.randomNumFromRange(1, 20)} | ${exports.truncateToDecimalPlace(usedPrice, 2)} | ${cats.data[exports.getRandomIntInclusive(0,32)]} | ${categoryObj ? categoryObj.category : ''} | ${categoryObj ? exports.renderSubArrayString(categoryObj.data) : ''}`;
};

var currentLoop = 1;
var numberOfLoops = 1;
var currentId = 1;

function generateData() {
  if (currentLoop > numberOfLoops) {
    return;
  }
  console.time('HOW LONG TO THE POINT OF NO RETURN?');
  if (currentLoop <= numberOfLoops) {
    var currentString = '';

    for (var i = 1; i <= 100; i++) {
      currentString += exports.generateIndividualObject(currentId) + '\n';
      currentId += 1;
    }
    fs.appendFile('bigFileTest.csv', `${currentString}`, 'utf8', (err) => {
      if (err) throw err;
      console.log(`LOOP ${currentLoop} was appended to file!`);
      console.timeEnd('HOW LONG TO THE POINT OF NO RETURN?');
      currentLoop += 1;
      generateData();
    });
  }
};

exports.generateObject = () => {
  const thisParticularId = (exports.getRandomIntInclusive(10000000, 15000000));
  const categoryObj = variations[Math.round(Math.random())];
  // loop through a few items at a random section of the array

  const listPrice = (exports.randomNumFromRange(1.99, 3024.99) * 100) / 100;

  // price is between 80% to 95% of the list price
  const price = listPrice * (exports.randomNumFromRange(80, 95) / 100);

  // used price is between 50% to 95% of the price
  const usedPrice = price * (exports.randomNumFromRange(50, 95) / 100);

  return `${thisParticularId} , Egg ${thisParticularId} , ${faker.company.companyName()} , ${exports.randomNumFromRange(0.5, 5, 'log', 1)} , ${exports.randomNumFromRange(5, 1000)} , ${exports.randomNumFromRange(2, 30, 'log')} , ${exports.randomNumFromRange(0, 1)} , ${exports.renderDepartments()} , ${exports.truncateToDecimalPlace(listPrice, 2)} , ${exports.truncateToDecimalPlace(price, 2)} , ${exports.randomNumFromRange(0, 1)} , ${exports.randomNumFromRange(0, 1)} , ${faker.company.companyName()} , ${exports.randomNumFromRange(0, 1, 'log')} , ${exports.randomNumFromRange(0, 1)} , ${faker.lorem.lines().replace(/\n/g, '\\n')} , ${exports.randomNumFromRange(1, 20)} , ${exports.truncateToDecimalPlace(usedPrice, 2)} , ${cats.data[exports.getRandomIntInclusive(0,32)]} , ${categoryObj ? categoryObj.category : ''} , ${categoryObj ? exports.renderSubArrayString(categoryObj.data) : ''}`;
};


// var files = fs.readdirSync('../data');

// function generateData() {
//   console.time();
//   function updateFile(fileIndex) {
//     var file = files[fileIndex];
//     var array = fs.readFileSync(`../data/${file}`, 'utf8');
//     var parsedArray = JSON.parse(array);
//     var newArray = [];
//     for (var i = 0; i < parsedArray.length; i++) {
//       var {productName, _id} = parsedArray[i];
//       newArray.push(generateRandomData(_id, productName));
//     }
//     var newStringifiedArray = JSON.stringify(newArray);
//     fs.writeFileSync(`./bigData/bigDataFile${fileIndex}`, newStringifiedArray, 'utf8');
//     console.log(`YO I AM DONE WITH ${fileIndex} !`)
//   }

//   for (var i = 1; i < files.length; i++) {
//     updateFile(i);
//   };
//   console.timeEnd();
// };


// function read() {
//   var string = fs.readFile('bigFatFile.json', 'utf8');
//   // var parsedString = JSON.parse(string);
//   // console.log(parsedString);
//   console.log(JSON.parse(string));
//   // fs.writeFileSync('bigFatParsedFile.json', parsedArray, 'utf8');

// }

// read();

// function time() {
//   console.time();
//   generateData();
//   console.timeEnd();
// }

// time();