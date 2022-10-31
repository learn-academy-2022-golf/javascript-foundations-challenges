// Challenges

// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt. Use .map() or .filter() to complete all of the following exercises.
// Don't forget to pseudo code.

// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.

// Create a function
// Input: const arr1 
// Output: arr1 * 10


const arr1 = [3, 9, 15, 4, 10]
// // output: [30, 90, 150, 40, 100]
// actual output: [30, 90, 150, 40, 100]

var mult10 = arr1.map(value => {
    return value * 10
  })

  console.log ("Mult10:",mult10)


// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
const arr2 = [2, 7, 3, 5, 8, 10, 13]
// // output: [7, 3, 5, 13]

// Write a function using HOF .filter
// input: const arr2
// output: only odd number

const onlyOdd = (array) => {
    return array.filter((value) => value % 2 !== 0)

}
console.log(onlyOdd(arr2))

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
// const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// // output: "nicework"


// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
// const filterArrayValues = [58, "", "abcd", true, null, false, 0]
// // output: [58, "abcd", true]
// 🏔 Stretch Goals


// Create a function that takes in a string and returns a new string with all the vowels removed.
// const str = "javascript is awesome"
// // output: "jvscrpt s wsm"


// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
// const arr1 = [3, 7, 10, 5, 4, 3]
// const arr2 = [7, 8, 2, 1, 5, 4]
// // output: [3, 7, 10, 5, 4, 8, 2, 1]