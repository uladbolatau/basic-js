const { createStubInstance } = require("sinon");
const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (Object.prototype.toString.call(date) !== "[object Date]") {
    return date === undefined ? "Unable to determine the time of year!" : new Error(THROWN);
  }

  const seasonsName = ["winter", "spring", "summer", "autumn"];
  let month = date.getMonth() === 11 ? 0 : date.getMonth();

  return seasonsName[Math.round((month) / 3)];
};
