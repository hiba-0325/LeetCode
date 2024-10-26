var ArrayWrapper = function (nums) {
  this.array = nums;
};
ArrayWrapper.prototype.valueOf = function () {
  return this.array.reduce((pre, cur) => pre + cur, 0);
};

ArrayWrapper.prototype.toString = function () {
  return JSON.stringify(this.array);
};

const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);

const merged = obj1 + obj2;

console.log(String(merged));
console.log(String(obj1));
console.log(String(obj2));
