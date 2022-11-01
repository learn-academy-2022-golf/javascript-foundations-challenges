// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.


//create a new function named mult3
//parameter is arr
//create a new variable named newArr containing an empty array
//create a for loop
//takes arr[i] mulitiplied by three
//pushes new arr[i] mulitiplied by three and pushes to newArr
//returns newArr
//call the function with console.log(arr)
const testArr1 = [3, 9, 15, 4, 10]
// // output: [9, 27, 45, 12, 30]

const mult3 = (arr) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 3)
    }
    return newArr
}
// console.log(mult3(testArr1))

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.

//create a function called oddNumber
//create a new variable called newArr
//create a for loop
    //within in the for loop create an if statement
        //the if statment will check if the value is odd
//will push the odd number into newArr
//call the function with console.log

const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// // output: [-7, 3, 5, 13]

const oddNumber = (arr) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 !== 0){
            newArr.push(arr[i])
        }
    }
    return newArr
} 
// console.log(oddNumber(testArr2))


// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.

// create a function named stringOnly
// let newArr=[]
// create a for loop
    //create an if statement
        //checking only string using typeof built in method
//will push result into newArr
//create new variable stringArr
    //stringArr=newArr.join('')
//return stringArr
//call the function(stringOnly(comboArr))
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
  // // output: "nicework"
const stringOnly = (arr) => {
    let newArr = []
    
    for (let i = 0; i < arr.length; i++) {
        if(typeof arr[i] === 'string'){
            newArr.push(arr[i])
        }
        
    }
    let stringArr = newArr.join('')
    return stringArr
}

// console.log(stringOnly(comboArr))

// Create a function that takes in an array of numbers and returns the sum.

// Create function sumNumbers
// Need a loop to add the sum of each number, store the result of this into a new variable named
// Push those results to the variable we created
// Pull the variable back in, add the next number in the array with a loop
    // Empty array, pull first/next index into the array and add them together
// Return the sum of the numbers, call the new function and log to the console

const addThese1 = [1, 2, 3, 4]
const sumNumbers = (arr) => {
    let newNumbers = 0
    for (let i = 0; i < arr.length; i++) {
        newNumbers += arr[i]    // newNumbers + arr[i] = *new* newNumbers
    }
    return newNumbers
}
console.log(sumNumbers(addThese1))

// // output: 10

// const addThese2 = []
// // output: 0
// Create a function that takes in an array of numbers and returns the index of the largest number.
// const indexHighestNumber = [1, 4, 2, 3]
// // output: 1
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
