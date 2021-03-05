const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let maxDeep = 0;

    arr.forEach((element) => {
      if (Array.isArray(element)) {
        let deep = this.calculateDepth(element);
        if (deep > maxDeep) {
          maxDeep = deep;
        }
      }
    });

    return ++maxDeep;
  }
};

const DepthCalculator = require('../src/recursive-depth.js');
