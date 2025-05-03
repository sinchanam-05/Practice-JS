if (!Array.prototype.flat) {
  Array.prototype.flat = function (depth = 1) {
    const out = [];
    const flatDeep = (arr, d) => {
      for (const item of arr) {
        if (Array.isArray(item) && d > 0) flatDeep(item, d - 1);
        out.push(item);
      }
    };
    flatDeep(this, depth);
    return out;
  };
}

console.log([1, [2, 3, [4]]].flat()); // [1, 2, 3, [4]]
console.log([1, [2, 3, [4]]].flat(2)); // [1, 2, 3, 4]
