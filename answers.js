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
// var numArray = [1, 2, 3, -4, -3, -5, NaN, undefined];

// function fun1(num) {
//     return (num > 0);
// }

function filterArray (arr, funfun) {return arr.filter(funfun);}

// console.log(filterArray(numArray, fun1));

/* Exercise 4
Write a function called longestWord that takes a string as argument, and 
returns the longest word in the string. You should use Array.prototype.reduce 
to do your work.

Hint: You can use String.prototype.split to split the string into an array of 
words.
*/
var testString = "I am a test string to pass through the function."


function testingWordLength(word1, word2) {
    if (word2.length > word1.length) {
        return word2;
    } else {
        return word1;
    }
}

function longestWord(stringToTest) {
    var singleWords = stringToTest.split(" "); //singleWords is array of words in testString
    
    return singleWords.reduce(testingWordLength,"");
}

// console.log(longestWord(testString));

/*
Exercise 5
Write a function called countVowels that takes a string and returns the number 
of vowels in the string. You should use Array.prototype.reduce to do your work.

Hint: You can use String.prototype.split again. There is a way to use it to 
split a string by character. Try to Google it :)

Hint 2: You can create an array of vowels and use Array.prototype.indexOf to 
check if the current letter is a vowel.
*/

var testString2 = "I am also a test string to pass through the function.";
var vowels = ["a", "e", "i", "o", "u"];



function countVowels(stringToTest) {
    var singleLetters = stringToTest.split(""); //singleWords is array of characters in stringToTest
    
    return singleLetters.reduce( function(counter, char) {
        if (vowels.indexOf(char) > -1) {
            counter = counter + 1;
        }
        return counter;
    }, 0);
}

// console.log(countVowels(testString2));

/* exercise 6: Write a function called highLow that takes an array of numbers, and returns 
an object with a property highest containing the highest number, and a property 
lowest containing the lowest number, using Array.prototype.reduce.

For example, starting with [1, -10, 20, 40, 5], your function should return 
{highest: 40, lowest: -10}.
*/
var testArr = [-1, 3, 5, 67, 879, 4, 6, 999];


var highLow = testArr.reduce(function(objCounter, num) {
        
        if (num > objCounter.highest) {
            objCounter.highest = num;
        }

        if (num < objCounter.lowest) {
            objCounter.lowest = num; 
        }
    return objCounter;    
        
    }, {highest: -Infinity, lowest: Infinity});

// console.log(highLow);

// exercise 7: highest, second highest, lowest, second lowest

var testArr = [-1, 3, 5, 67, 879, 4, 6, 999];


var highLowTwo = testArr.reduce(function(objCounter, num) {
        
        if (num > objCounter.highest) {
            objCounter.secondHighest = objCounter.highest
            objCounter.highest = num;
        }
        
        if (num < objCounter.highest && num > objCounter.secondHighest) {
            objCounter.secondHighest = num;
        }
        
        if (num < objCounter.lowest) {
            objCounter.secondLowest = objCounter.lowest;
            objCounter.lowest = num;
        }
        
        if (num > objCounter.lowest && num < objCounter.secondLowest) {
            objCounter.secondLowest = num;
        }
        
    return objCounter;    
        
    }, {highest: -Infinity, lowest: Infinity, secondHighest: -Infinity, secondLowest: Infinity});
    
// console.log(highLowTwo); 
    
    
//Exercise 8

var testingString = "helloworld";

function countChars(str) {
    var splitStr = str.split("")
    
    return splitStr.reduce(function(obj, chars){
        if (obj[chars]) {
          obj[chars] = obj[chars] + 1;
          
        } 
        else {
          obj[chars] = 1; 
        }
        return obj;
    }, {});
}

// console.log(countChars(testingString));
 
 
// //Exercise 9

var personData = [
  {
    "id": "KeXoYg92is",
    "firstName": "John",
    "lastName": "Smith",
    "email": "john@smith.com"
  },
  {
    "id": "NkALmSWtUp",
    "firstName": "Donald",
    "lastName": "Duck",
    "email": "don@disney.com"
  },
  {
    "id": "m7LPbJYSUg",
    "firstName": "John",
    "lastName": "Vader",
    "email": "vader@darkside.com"
  }
]
    
function peopleById(arr) {
    
    var newObj = arr.reduce(function(obj, property){
          obj[property.id] = property; 
        return obj;
    }, {});
    return newObj;
}

// console.log(peopleById(personData)); 

//exercise 10 

function peopleByFirstName(arr) {
    
    var newFirstNameObj = arr.reduce(function(obj, personObj){
          if(!obj[personObj.firstName]) {
              obj[personObj.firstName] = [];
              obj[personObj.firstName].push(personObj)
          }
          else {
              obj[personObj.firstName].push(personObj)
          }
        return obj;
    }, {});
    return newFirstNameObj;
}

console.log(peopleByFirstName(personData));