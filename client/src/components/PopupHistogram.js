exports.randomDistribution = function randomDistribution(average) {
  // generate n random numbers, compute their sum, divide each one by the sum.


  // array of random numbers between 0 and 1
  var rand = [Math.random(), Math.random(), Math.random(), Math.random(), Math.random()];
  var randSum = rand.reduce((a, b) => (a + b));

  var desiredAvg = 3.8;
  // array of random numbers that add up to 1
  var perc = rand.map(x => x / (randSum * desiredAvg));
  var percSum = perc.reduce((a, b) => (a + b));

  var actualAvg = percSum / 5;
  // console.log(actualAvg)

  // console.log(randSum, rand);
  // console.log(percSum, perc);


  // return resultsArr;
  return {
    5: 0.24,
    4: 0.05,
    3: 0.09,
    2: 0.10,
    1: 0.52,
  };
};
