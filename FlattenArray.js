var flat = function (arr, n) {
  return arr.flat(n);
};

const arr = [1,2,3,[4,5,6],[7,8,[9,10,11],12],[13,14,15]];

console.log(flat(arr, 2));