// Question 1
let agesArray = new Array(3, 9, 23, 64, 2, 8, 28, 93);
console.log(agesArray);
// 1a
console.log(agesArray[agesArray.length - 1] - agesArray[0]);
// 1b
agesArray.push(5);
console.log(agesArray[agesArray.length - 1] - agesArray[0]);
// 1c
function averageAge(array) {
    let sum = 0;
    for(let i = 0; i < array.length;i++){
        sum += array[i];
    }
    return sum / array.length;
}
console.log(averageAge(agesArray));

// Question 2
let namesArray = new Array('Sam', 'Tommy', 'Tim', 'Buck', 'Bob');
console.log(namesArray);
// 2a
function averageStringLength(array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i].length;
    }
    return sum / array.length;
}
console.log(averageStringLength(namesArray));
//2b
function concatenateStrings(array) {
    let names = array[0];
    for(let i = 1; i < array.length; i++){
        names += ' ' + array[i];
    }
    return names;
}
console.log(concatenateStrings(namesArray));

// Question 3
console.log('array[array.length - 1]');

// Question 4
console.log('array[0]');

// Question 5
let nameLengthsArray = new Array();
for(let i = 0; i < namesArray.length; i++){
    nameLengthsArray.push(namesArray[i].length);
}
console.log(nameLengthsArray);

//Question 6
let sum = 0;
for (let i = 0; i < nameLengthsArray.length; i++) {
  sum += nameLengthsArray[i]
}
console.log(sum)

//Question 7
function repeatWord(word, n) {
   let result = ''
    for (let i = 0; i < n; i++) {
        result += word 
    }
    return result
}
console.log(repeatWord('Hello', 3));

//Question 8
function fullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
console.log(fullName('Claire', 'Green'));

//Question 9
let numbersArray = []
function bigSum(numbersArray) {
    let sum = 0;
    for (let i = 0; i < numbersArray.length; i++) {
        sum += numbersArray[i]
    }
    if (sum > 100) {
        return true;
    }
}
console.log(bigSum(numbersArray));

//Question 10
function averageNumber(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}
console.log(averageNumber(numbersArray));

//Question 11
function compareAverages(array1, array2) {
    if (averageNumber(array1) > averageNumber(array2)) {
        return true
    }
}
let array1 = [3, 12, 1, 9, 18, 5];
let array2 = [20, 25, 19, 15, 14];
console.log(compareAverages(array1, array2));

//Question 12
function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside === true && moneyInPocket > 10.50) {
        return true;
    }
}
console.log(willBuyDrink(false, 12));

//Question 13- Create a function to determine if the passed variable is an array of strings- I created this function to be able to quickly determine what kind of opperand I am working with. 
function isArrayOfStrings(value) {
    if (Array.isArray(value) === false) {
        return false; } 
        for(let i=0; i<value.length; i++) {
            if(typeof value[i] != 'string') {
                return false;
            }
        } return true
    }
console.log(isArrayOfStrings(namesArray));
