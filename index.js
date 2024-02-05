// Question 1: Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// 1a. Subtract the value of the first element from the last element programmatically

let ageDifference = ages[ages.length - 1] - ages[0]; // subtracts first element from last element
console.log(`1a. ${ageDifference}`);

// 1b. Add a new age to the array and repeat the step above to ensure it is dynamic

ages.push(20); // adds '20' to end of array
ageDifference = ages[ages.length - 1] - ages[0]
console.log(`1b. ${ageDifference}`);

// 1c. Use a loop to iterate through the array and calculate the average age

let totalAge = 0; // initialize totalAge
for (let i = 0; i < ages.length; i++) {
    totalAge += ages[i]; // adding each age in array to totalAge
}
let averageAge = totalAge / ages.length; // calculating averageAge
console.log(`1c. ${averageAge}`);

// Question 2: Create an array called names with the given values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// 2a. Calculate the average number of letters per name

let totalLetters = 0; // initialize variable
for (let i = 0; i < names.length; i++) {
    totalLetters += names[i].length; // summing names[i].length of each array element
}
let averageLetters = totalLetters / names.length; // calculating avg
console.log(`2a. ${averageLetters}`);

// 2b. Concatenate all the names together, separated by spaces

let concatenatedNames = '';
for (let i = 0; i < names.length; i++) {
    concatenatedNames += names[i] + ' '; // concatenating names and adding space at the end of each name
}
console.log(`2b. ${concatenatedNames}`);

// Question 3: How do you access the last element of any array?

console.log(`3. arrayName[arrayName.length - 1]`)

// Question 4: How do you access the first element of any array?

console.log(`4. arrayName[0]`)

// Question 5: Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

let nameLengths = [];
for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length); // push name[i].length for each name to new array
}
console.log(`5. ${nameLengths}`);

// Question 6: Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

let sum = 0; // initialize
for (let i = 0; i < nameLengths.length; i++) {
    sum += nameLengths[i]; // adding all elements
}
console.log(`6. ${sum}`);

// Question 7: Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times.

function wordFunction(word, n) {
    let result = ''; 
    for (let i = 0; i < n; i++) {
        result += word; // concatenating word to itself n times
    }
    return result; 
}
console.log(`7. ${wordFunction('Hello', 3)}`); // example of function with inputs 'Hello' and 3

// Question 8: Write a function that takes two parameters, firstName and lastName, and returns a full name.

function createFullName(firstName, lastName) {
    return firstName + ' ' + lastName
};
console.log(`8. ${createFullName('John', 'Smith')}`)

// Question 9: Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

function isSumGreaterThan100(array) {
    let sum = 0; // initialize
    for (let i = 0; i < array.length; i++) {
        sum += array[i]; // sum
    }
    return sum > 100; // returns boolean value true if sum is greater than 100
}
console.log(`9. ${isSumGreaterThan100([20, 50, 80, 90])}`) // example

// Question 10: Write a function that takes an array of numbers and returns the average of all the elements in the array.

function arrayAverage(array) {
    let sum = 0; // initialize
    for (let i = 0; i < array.length; i++) {
        sum += array[i]; // sum
    }
    return sum / array.length // average
}
console.log(`10. ${arrayAverage([20, 50, 80, 90])}`) // example

// Question 11: Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

function functionQuestion11(array1, array2) {
    function calculateAverage(array) { 
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i]; // function calculateAverage is nested inside functionQuestion11
        }
        return sum / array.length // average
    }
    let avg1= calculateAverage(array1);
    let avg2 = calculateAverage(array2);
    return avg1 > avg2; // if avg of array1 is greater than avg of array2, returns true
}
console.log(`11. ${functionQuestion11([6,7,8], [1,2,3])}`) // example

// Question 12: Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && (moneyInPocket > 10.50);
}
console.log(`12. ${willBuyDrink(true, 15)}`) // example

// Question 13: Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
// The function will determine if an umbrella is needed based on if it is raining and if you are going outside. If isRaining and goingOutside are both true, then you will need an umbrella. Otherwise you will not need an umbrella.

function needUmbrella(isRaining, goingOutside) {
    if (isRaining && goingOutside) {
        return `Will need umbrella`;
    } else {
        return `Will not need umbrella`;
    }
}
console.log(`13. ${needUmbrella(true, true)}`) // example