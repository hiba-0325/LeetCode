var filter = function (arr, fn) {
    return arr.filter(fn);
};


var numbers = [1, 2, 3, 4, 5, 6];


var isOdd = function(num) {
    return num % 2 !== 0;
};


var oddNumbers = filter(numbers, isOdd);

console.log(oddNumbers);
