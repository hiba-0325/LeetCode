var createHelloWorld = function () {
  return function (...args) {
    return "hello world";
  };
};

var welcomeWorld = function () {
  return function (...args) {
    return "Welcome to de world";
  };
};

const hello = createHelloWorld();

const f = welcomeWorld();

// example
console.log(hello());
console.log(hello(1, 2, 3));
console.log(f());
