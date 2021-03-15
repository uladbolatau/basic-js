const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  const ctrlDiscardNext = "--discard-next";
  const ctrlDoubleNext = "--double-next";
  const ctrlDiscardPrev = "--discard-prev";
  const ctrlDoublePrev = "--double-prev";
  let result = arr.slice();

  arr.forEach((element, index) => {
    switch (element) {
      case ctrlDiscardNext: 
        if (index === arr.length - 1) {
          result.splice(-1);
          break;
        }

        var ctrlDiscardNextIndex = result.indexOf(ctrlDiscardNext);
        result.splice(ctrlDiscardNextIndex, 2, undefined);
        break;

      case ctrlDoubleNext: 
        if (index === arr.length - 1) {
          result.splice(-1);
          break;
        }

        var ctrlDoubleNextIndex = result.indexOf(ctrlDoubleNext);
        result.splice(ctrlDoubleNextIndex, 1, result[ctrlDoubleNextIndex + 1]);
        break;

      case ctrlDiscardPrev: 
        if (index === 0) {
          result.splice(0, 1);
          break;
        }

        var ctrlDiscardPrevIndex = result.indexOf(ctrlDiscardPrev);
        result.splice(ctrlDiscardPrevIndex - 1, 2, undefined);
        break;

      case ctrlDoublePrev:
        if (index === 0) {
          result.splice(0, 1);
          break;
        }

        var ctrlDoublePrevIndex = result.indexOf(ctrlDoublePrev);
        result.splice(ctrlDoublePrevIndex, 1, result[ctrlDoublePrevIndex - 1]);
        break;
    }
  });

  return result.filter((element) => {
    return element !== undefined;
  });
};
