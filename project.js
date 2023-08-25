//Question 1
let ages = [2, 3, 8, 9, 23, 28, 64, 93];
let firstAge = ages[0];
let lastAge = ages[ages.length - 1];
let result = lastAge - firstAge;
console.log(result);

ages.push(97);
let youngestAge = ages[0]
let oldestAge = ages[ages.length - 1];
let age = oldestAge - youngestAge;
console.log(age);

let sum = 0;
for (i = 0; i < ages.length; i++) {
    sum += ages[i];
}
let average = sum / ages.length;
console.log(average);
// this code runs through my ages array, adding an object to it as required
// and eventually finding the sum of all objects.


//Question 2
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let totalLetters = 0;
for (i = 0; i < names.length; i++) {
    totalLetters += names[i].length;
}
let avg = totalLetters / names.length;
console.log(avg);
let concatenatedNames = " ";
for (let i = 0; i < names.length; i++) {
    if (i !== 0) {
        concatenatedNames += " ";
    }
    concatenatedNames += names[i];
}
console.log(concatenatedNames);
// this code runs through my names array, finding the average number
// of letters and concatenating all of the names.

//Question 3
let lastItem = names[names.length -1];
console.log(lastItem);
// this code finds the last item of my names array.

//Question 4
console.log(names[0]);
// this code finds the first item of my names array.

//Question 5
let nameLengths = [];
for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}
console.log(nameLengths);
// this code adds the length of the names to the names in the array.

//Question 6
let namesLengths = [3, 5, 3, 5, 4, 3];
let nameTotals = 0
for (i = 0; i < nameLengths.length; i++) {
    nameTotals += nameLengths[i];
}
console.log(nameTotals);
// this code finds the sum of the names in the name array.

//Question 7
function greeting(word, n) {
    let result = ' ';
    for (let i = 0; i < n; i++) {
        result += word;
    }
    return result;
}
console.log(greeting('Hello', 4));
// this code takes a word and repeats it a number of times with
// a space between each iteration of the word.

//Question 8
function fullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
console.log(fullName("Sam", "Smith"));
// this code takes a first name and a last name and prints
// them together as a full name.

//Question 9
let numbersArray = [7, 35, 40, 80];
function greaterThan100(numbersArray) {
    let sumGreaterThan100 = 0;
    for (let i = 0; i < numbersArray.length; i++) {
        sumGreaterThan100 += numbersArray[i];
    }
    return sumGreaterThan100 > 100
}
console.log(greaterThan100(numbersArray));
// this code takes my numbers array and finds out whether the 
// sum is greater than 100 or not.

//Question 10
let numbers = [3, 15, 28, 35, 50];
let averageOfArray = 0
function arrayAverage (numbers) {
    for (let i = 0; i < numbers.length; i++) {
        averageOfArray += numbers[i];
    } 
    return averageOfArray / numbers.length
}
const averageSum = arrayAverage(numbers);
console.log(averageSum);
// this code finds the average of my new numbers array.

//Question 11
let numbers = [3, 15, 28, 35, 50];
let numbersArray = [7, 35, 40, 80];
function isAverageGreaterThan (numbers, numbersArray) {
    const average1 = calculateAverage (numbers);
    const average2 = calculateAverage (numbersArray);

    return average1 > average2;
}

function calculateAverage(array) {
    if (array.length === 0) {
        return 0;
    }
    let sum2 = 0;
    for (let i = 0; i < array.length; i++) {
        sum2 += array[i];
    }
    return sum2 / array.length;
}
console.log(isAverageGreaterThan(numbers, numbersArray));
// this code takes my two arrays and first figures out the average
// of each and then compares which is greater.

//Question 12
let isHotOutside = true;
let moneyInPocket = 12;
function willBuyDrink (isHotOutside, moneyInPocket) {
    if (isHotOutside === true && moneyInPocket > 10.50) {
        return true;
    } else {
        return false;
    }

}
console.log(willBuyDrink(isHotOutside, moneyInPocket));
// this code finds out whether I have enough money or not to buy
// a drink and whether it is hot or not outside.

//Question 13
let isPregnant = true;
let dueDate = 'January';
function amIDueYet (isPregnant, dueDate) {
    if (isPregnant && dueDate === 'January') {
        return true;
    } else {
        return false;
    }
}
console.log(amIDueYet(isPregnant, dueDate));
// I wrote this function as I am currently 
//pregnant with my first but it is not January just yet.