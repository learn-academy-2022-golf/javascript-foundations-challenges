// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
//function takes in a parameter of an array.
//initialize variable with newArray
//iterate through array with a for loop.
    //multiply each element by 3.
// const testArr1 = [3, 9, 15, 4, 10]

// let arrayMult = (arr) => {
// let newArray = []
// for (let i = 0; i<arr.length; i++){
//     newArray.push(arr[i] * 3)
// }
// return newArray
// }

// console.log(arrayMult(testArr1))
//// output: [9, 27, 45, 12, 30]
// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
// Need function that takes in array as an arguement
// establish newArr with empty brackets
//for loop 
    // conditional statement testing for odd numbers.
// Print out an array with odd numbers.    
// const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// const createOddArray = (arr) => {
//     let newOddArr = []
//     for (i = 0; i< arr.length; i++){
//         if (arr[i] % 2 !==1) 
//         newOddArr.push(arr[i])
//     }
//         return newOddArr
// }
// console.log(createOddArray(testArr2))
// // output: [-7, 3, 5, 13]
// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
//Use typeOf method
//function that takes an array and gives us strings with only letters.
// initialize empty array
//for loop
    //conditional that checks for one letter within a string
// invoke function

// const comboArr = [
//    7,
//    "n",
//   true,
//   "i",
//   "c",
//   10,
//   "e",
//   -388,
//   "w",
//   3,
//   "o",
//   0,
//   "r",
//   false,
//   "k"
// ]

// const makeLetterArray = (arr) =>{
//     let letterArray = []
//     for (let i=0; i<arr.length; i++){
//         if (typeof arr[i] === "string")
//         letterArray.push(arr[i])
//     }  return letterArray
// }
// console.log(makeLetterArray(comboArr))

// // output: "nicework"
// Create a function that takes in an array of numbers and returns the sum.
const addThese1 = [1, 2, 3, 4]

// output: 10

// const addThese2 = []
// const sumNum = (arr) => {
//     let sum = 0
//     for (let i = 0; i < arr.length; i++){
//         sum = sum + arr[i]   
//     }
//     return sum
// }
// console.log(sumNum(addThese2));
// // output: 0

// Create a function that takes in an array of numbers and returns the index of the largest number.
//finding largest number in array. built in function, 

const indexHighestNumber = [1, 4, 2, 3]
const largestNum = (arr) => {
    return arr.sort().pop()

}
console.log(largestNum(indexHighestNumber));
// // output: 1
// ???? Stretch Goals
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
// ???? Epic Goals
// Create a function called highLow that takes in a number and returns whether the number is higher or lower than the "answer".
// Create an HTML page and link your JavaScript file. More info here.
// As a user, I see a prompt or input where I can guess a number between 1 and 100 (both inclusive).
// As a user, I can see if my guess is too high or too low.
// As a user, if I guess the "answer" correctly I am notified that I won.
// As a user, I can continue to guess the "answer" until I am correct.
// STRETCH: As a user, if I have not guessed the correct number in seven tries I see a losing message.