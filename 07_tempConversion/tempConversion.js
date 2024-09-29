const convertToCelsius = function(num1) {
  let fh = (num1 - 32) * 5 / 9;

  let roundedFh = Math.round(fh * 10) / 10;

  return roundedFh;
};

const convertToFahrenheit = function(num2) {
  let cs = (num2 * 1.8) + 32;

  let roundedCs = Math.round(cs * 10) / 10;

  return roundedCs;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
