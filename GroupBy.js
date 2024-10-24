Array.prototype.groupBy = function (fn) {
  const ans = {};
  for (let e of this) {
    const key = fn(e);
    ans[key] ||= [];
    ans[key].push(e);
  }
  return ans;
};

console.log([1, 2, 3].groupBy(String));
