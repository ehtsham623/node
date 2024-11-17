function generateRandomNums() {
  return Math.floor(Math.random() * 100);
}

function cToF(celcius) {
  return (celcius * 9) / 5 + 32;
}

module.exports = { generateRandomNums, cToF };
