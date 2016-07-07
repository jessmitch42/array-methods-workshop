//Exercise 1

var numbersList = [-5, -4, 5, 4, -6, -100, 66];
var positiveNum = [];


numbersList.forEach(function(num) {
    if (num > 0) {
        positiveNum.push(num);
    }
});

console.log(positiveNum);