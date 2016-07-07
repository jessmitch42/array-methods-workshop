//Exercise 1

var numbersList = [-5, -4, 5, 4, -6, -100, 66, 7, 8888];
var positiveNum = [];


// numbersList.forEach(function(num) {
//     if (num > 0) {
//         positiveNum.push(num);
//     }
// });

// console.log(positiveNum);

//Exercise 2!


function getPositive(num) {
    if (num > 0) {
        return num;
    }
}
console.log(numbersList.filter(getPositive));
