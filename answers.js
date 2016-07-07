//Exercise 1

var numbersList = [-5, -4, 5, 4, -6, -100, 66, 7, 8888];
var positiveNum = [];


numbersList.forEach(function(num) {
    if (num > 0) {
        positiveNum.push(num);
    }
});

// console.log(positiveNum);

//Exercise 2!

function getPositive(num) {
    if (num > 0) {
        return num;
    }
}
// console.log(numbersList.filter(getPositive));

//Exercise 2B!
function printedPositives (numbersList) {
    return numbersList.filter(getPositive).forEach(
            function(num) {
                    console.log(num);
            });
}

// printedPositives(numbersList);

/* 
Write a function called filterArray that takes an array AND a function as 
arguments. Your filter function should return a new array that contains only 
the elements where the passed function returns a truthy value.

NOTE: You are allowed to use Array.prototype.filter to answer this question.

NOTE 2: This is a bit of a trick question, the answer is a one-liner :)
*/
//Exercise 3
var numArray = [1, 2, 3, -4, -3, -5, NaN, undefined];

function fun1(num) {
    return (num > 0);
}

function filterArray (arr, funfun) {return arr.filter(funfun);}

console.log(filterArray(numArray, fun1));