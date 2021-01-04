/*
Exercise 1:
Write a function testNum that takes a number as an argument and returns a 
Promise that tests if the value is less than or greater than the value 10. Log the result 
to the console.
*/

const testNum = (number) => {
    return new Promise((resolve, reject) => {
        if (number >= 10) {
            resolve('number is bigger than or equal to 10');
        } else {
            reject('number is below 10');
        }
    });
};

console.log('testnum');
testNum(5)
    .then(function (resolved) { console.log(resolved); })
    .catch(function (rejected) { console.log(rejected); });


/*
Exercise 2:
Write two functions that use Promises that you can chain! The first function, 
makeAllCaps(), will take in an array of words and capitalize them, and then the second function, 
sortWords(), will sort the words in alphabetical order. If the array contains anything but strings, 
it should throw an error.
Then call these functions by *chaining* the promises
*/

const makeAllCaps = (array) => {
    return new Promise((resolve, reject) => {
        if(array.every((item) => { 
            return typeof item === "string";})
        ) {
            resolve(sortWords(array.map((item) => {
                return item.toUpperCase();
            })));
        } else {
            reject('Array included non-string items');
        }       
    });
};  

const sortWords = (array) => {
    return new Promise((resolve, reject) => {
        if(array) {
            resolve(array.sort());
        } else {
            reject('Array included non-string items');
        }
    });
};

const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

console.log('array of words');
makeAllCaps(arrayOfWords)
    .then(result => console.log(result))
    .catch(error => console.log(error));

console.log('complicated array');
makeAllCaps(complicatedArray)
    .then(result => console.log(result))
    .catch(error => console.log(error));

// call both functions, chain them together and log the result to the console