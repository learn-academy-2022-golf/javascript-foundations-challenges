// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.



// Create a function
// Take testArr1 with a new array newR value multiplied by 3    
// Creat for loop function index starting at 0 and ending testArr1.length 
// Add i++ (increment) to let use know when to stop
// // return value of newR 

// const testArr1 = [3, 9, 15, 4, 10]
// const newR = (nums) => {
//     let array1 = []
//     for (let i = 0; i < nums.lenght; i++)
//     { 
//         array1.push(nums[i] * 3)
// }
// return array1
// }

//  console.log(newR(testArr1))


const testArr1 = [3, 9, 15, 4, 10]

const newR = (nums) => {
  let array1 = []
  for (let i = 0; i < nums.length; i++) 
  {
    array1.push(nums[i] * 3)
  }
  return array1
}

console.log(newR(testArr1))

// // Write a function that takes in an array of numbers and returns a new array with only odd numbers.
// // const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// // // output: [-7, 3, 5, 13]
 //create a function that will return a new array with only the odd numbers from given testArr2
 //create a varible 
// if(oddNums % 2 !==0)

const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// const odd = (odd1) => {  
// }

const odd = (oddNums) => {
  let array2 = []
  for (let i = 0; i < oddNums.length; i++) 
  {
    if(oddNums / 2 !==0)
    array2.push(oddNums[i] % 2)
  }
  return array2
}

console.log(odd(testArr2))














// // Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
// // const comboArr = [
// //   7,
// //   "n",
// //   true,
// //   "i",
// //   "c",
// //   10,
// //   "e",
// //   -388,
// //   "w",
// //   3,
// //   "o",
// //   0,
// //   "r",
// //   false,
// //   "k"
// // ]
// // // output: "nicework"

// // Create a function that takes in an array of numbers and returns the sum.
// // const addThese1 = [1, 2, 3, 4]
// // // output: 10

// // const addThese2 = []
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
