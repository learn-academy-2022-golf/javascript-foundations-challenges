// Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.
// Don't forget to pseudo code.

// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
const testArr1 = [3, 9, 15, 4, 10]
// output: [9, 27, 45, 12, 30]

/*
Set up a function with const mult3
A parameter of arr
Declare a new variable newArr that will hold an empty array
In a for loop
    Multiply the current number by three and use .push() to add it onto the new array
Return newArr
*/
const mult3 = (arr) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++){
        newArr.push(arr[i] * 3)
    }
    return newArr
}
console.log(mult3(testArr1))

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// // output: [-7, 3, 5, 13]
// Create a function that takes in an array of numbers. 
// Parameter will be numberArray
// Create a new array that is empty: oddArray
// Use a for loop to iterate through the original array
// if the current number is odd, .push onto the new array
// return oddArray

const oddMaker = (numberArray) => {
    let oddArray = []
    for (let i=0; i < numberArray.length; i++){
        if(numberArray[i] % 2 !== 0){
            oddArray.push(numberArray[i])
        }
    }
    return oddArray
}
console.log(oddMaker(testArr2))

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
const comboArr = [
  7,
  "n",
  true,
  "i",
  "c",
  10,
  "e",
  -388,
  "w",
  3,
  "o",
  0,
  "r",
  false,
  "k"
]

/*
Create a new function using const lettersOnly
Input is the parameter named randomArray
Create a new empty array with the variable name letters
Set up a for loop
    for each iteration check the typeof each element
    if it is a letter use .push() to add it to the end of the array of letters
Create a new variable called makeString which uses .join() to convert letters to a string
Return the string makeString
*/

const lettersOnly = (randomArray) => {
    let letters = [];
    for (let i = 0; i < randomArray.length; i++) {
        if (typeof randomArray[i] == "string") {
            letters.push(randomArray[i])
        }
    }
    let makeString = letters.join("")
    return makeString
}

console.log(lettersOnly(comboArr));
// output: "nicework"


// Create a function that takes in an array of numbers and returns the sum.
const addThese1 = [1, 2, 3, 4]
// output: 10

const addThese2 = []
// output: 0

/*
Set up a function with const makeSum
Parameter will be named numsToAdd
Set up variable called sum = 0
In a for loop
    add the current number to the variable sum
Return sum
*/

const makeSum =(numsToAdd) => {
    let sum = 0;
    for (let i = 0; i < numsToAdd.length; i++) {
        sum = numsToAdd[i] + sum;
    }
    return sum 
}

console.log(makeSum(addThese1));
console.log(makeSum(addThese2));

// Create a function that takes in an array of numbers and returns the index of the largest number.
const indexHighestNumber = [1, 4, 2, 3]
// output: 1

/*
Create a function with const = largeNum
It will take the parameter of numArray
Make a new variable called largestNumber = highest number [0]
Run a for loop with and if statement
    check whether the current number is higher than variable largestNumber
    if so, make largestNumber = current number
Return numArray.indexOf(largestNumber)
*/

const largeNum = (numArray) => {
    let largestNumber = numArray[0];
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] > largestNumber) {
            largestNumber = numArray[i]
        }
    }
    return numArray.indexOf(largestNumber)
}

console.log(largeNum(indexHighestNumber));

// 🏔 Stretch Goals
// Create a function that takes in two arrays and returns one array with no duplicate values.
// const arr1 = [3, 7, 10, 5, 4, 3, 3]
// const arr2 = [7, 8, 2, 3, 1, 5, 4]
// // output: [3, 7, 10, 5, 4, 8, 2, 1]
// Create a function that takes in two numbers as arguments and returns an array the length of the first number filled with the second number.
// const arrayLength = 6
// const arrayValue = 0
// // output: [0, 0, 0, 0, 0, 0]

// const arrayLength = 4
// const arrayValue = 11
// // output: [11, 11, 11, 11]
// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.
// const addUp1 = 4
// // 1 + 2 + 3 + 4 = 10
// // output: 10

// const addUp2 = 10
// // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
// // output: 55

// const addUp3 = 600
// // output: 180300
// 🏔 Epic Goals
// Create a function called highLow that takes in a number and returns whether the number is higher or lower than the "answer".
// Create an HTML page and link your JavaScript file. More info here.
// As a user, I see a prompt or input where I can guess a number between 1 and 100 (both inclusive).
// As a user, I can see if my guess is too high or too low.
// As a user, if I guess the "answer" correctly I am notified that I won.
// As a user, I can continue to guess the "answer" until I am correct.
// STRETCH: As a user, if I have not guessed the correct number in seven tries I see a losing message.