// Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.
// Don't forget to pseudo code.

// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.

// const multiplyByThree = (arr) => {
//     // iterate through arr
//     for (let i = 0 ; i < arr.length ; i++) {

//         arr[i] = arr[i] * 3

//     }
//     return arr
// }

// const testArr1 = [3, 9, 15, 4, 10]
// console.log(testArr1)
// console.log(multiplyByThree(testArr1)) // Output: [ 9, 27, 45, 12, 30 ]
// // output: [9, 27, 45, 12, 30]




// Write a function that takes in an array of numbers and returns a new array with only odd numbers.

// const evenReturn = (arr) => {

//     // create a new array below with only odd numbers
//     let array = []

//     // return only odd numbers in new array
//     for (let i = 0; i < arr.length; i++) {

//         // if number is odd
//         if (!(arr[i] % 2 == 0)) {
//             // populate array[i] with arr[i]
//             array.push(arr[i])
//         }
//     }

//     // return a new array below with only odd numbers
//     return array
// }

// const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]

// console.log(evenReturn(testArr2))
// console.log("Expected output: [-7, 3, 5, 13]")


// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
const arrToString = (arr1) => {

  // Empty placeholder to start the string
  let str1 = ""

  // Iterate through the given array
  for (let i = 0 ; i<arr1.length ; i++){
    
    // If current thing is a string, add it to ours
    if (typeof arr1[i] === "string"){

      str1 += arr1[i]
    }
  }
  return str1
}

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
console.log('expected output: "nicework"')
console.log(arrToString(comboArr))


// Create a function that takes in an array of numbers and returns the sum.


const sumArrayEntries = (arr1) => {

  // Create a counter
  let counter = 0

  // Iterate through the supplied array
  for (let i=0 ; i<arr1.length ; i++){
    // Update our counter
    counter += arr1[i]
  }
  return counter
}
const addThese1 = [1, 2, 3, 4]
console.log("Expected output: 10")
console.log(sumArrayEntries(addThese1))

const addThese2 = []
console.log("Expected output: 0")
console.log(sumArrayEntries(addThese2))

// Create a function that takes in an array of numbers and returns the index of the largest number.
const findHighestNumber = (arr1) => {
  // Create a starting number
  let largestNumber = arr1[0]
  let index = 0

  //Iterate through supplied array
  for (let i=0 ; i<arr1.length; i++){
    if (largestNumber < arr1[i]){
      largestNumber = arr1[i]
      index = i
    }
  }
  return index
}
const indexHighestNumber = [1, 4, 2, 3]
console.log("Expected output: 1")
console.log(findHighestNumber(indexHighestNumber))


// 🏔 Stretch Goals


// Create a function that takes in two arrays and returns one array with no duplicate values.
const noDuplicate = (array1, array2) => {

  // Function to remove duplicate entries from within each array
  const noInnerDuplicate = (array3) => {
    
    // Iterate through the array
    for (let i = 0 ; i < array3.length ; i++){
      for (let j = 0 ; j < array3.length ; j++){
        if (i != j && array3[i]===array3[j]){
          // Remove j index of duplicate
          array3.splice(j,1)
        }
      }
    }
    return array3
  }

  // Remove inner duplicates
  array1 = noInnerDuplicate(array1)
  array2 = noInnerDuplicate(array2)

  // Scan for duplicate entries and remove duplicate item from one
  for (let i=0 ; i < array1.length ; i++){
    for (let j=0 ; j < array2.length ; j++){

      if (array1[i]===array2[j]){

        // Remove duplicate item from array 2
        array2.splice(j,1)
        
      }
    }
  }
  // concatenate the arrays
  return array1.concat(array2)
}
const arr1 = [3, 7, 10, 5, 4, 3, 3]
const arr2 = [7, 8, 2, 3, 1, 5, 4]
console.log("expected output: [3, 7, 10, 5, 4, 8, 2, 1]")
console.log(noDuplicate(arr1, arr2)) // Close enough


// Create a function that takes in two numbers as arguments and returns an array the length of the first number filled with the second number.
const funnyFunction = (num1, num2) => {
  let funnyArray = []
  for (let i = 0 ; i < num1 ; i++){
    funnyArray.push(num2)
  }
  return funnyArray
}
const arrayLength1 = 6
const arrayValue1 = 0
console.log('Expected output: [0, 0, 0, 0, 0, 0]')
console.log(funnyFunction(arrayLength1, arrayValue1))

const arrayLength2 = 4
const arrayValue2 = 11
console.log('Expected output: [11, 11, 11, 11]')
console.log(funnyFunction(arrayLength2, arrayValue2))


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