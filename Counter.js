var createCounter = function (n) {
  let count = n;

  return function () {
    return count++;
  };
};

const counter = createCounter(10)
counter() 

console.log(counter(10))