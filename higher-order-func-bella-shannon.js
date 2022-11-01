// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt. Use .map() or .filter() to complete all of the following exercises.
// Don't forget to pseudo code.

// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.

// Create a function called mutl10
// Use .map to return a new array of the same length
// Returned the value with each number multiplied by 10


// const arr1 = [3, 9, 15, 4, 10]
// // output: [30, 90, 150, 40, 100]

// const mult10 = arr1.map((value) => {
//     return value * 10
// })
// console.log(mult10)



// Write a function that takes in an array of numbers and returns a new array with only odd numbers.

// Create a function called oddOnly 
// use a conditional statement to compare the function and return only odd numbers


// const arr2 = [2, 7, 3, 5, 8, 10, 13]
// // output: [7, 3, 5, 13]

// const oddOnly = arr2.map( value => {
//     if(value % 2 != 0) {
//         return value
//     }   else {
//         return "even"
//     }
// })
// console.log(oddOnly)


// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.

// Create a function called onlyLetters
// Inside the function create a new variable called oneType that will be a placeholder for the filter
// oneType will be only letters
// filter over oneType to get only the letters
// return the final variable


// const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// // // output: "nicework"

// const onlyLetters = (array) => {
//     let oneType = array.filter(value => typeof value === "string") 
//     let newLetter = oneType.filter(value => value % 2 !== ("n") && ("i") && ("c") && ("e") && ("w") && ("o") && ("r") && ("k"))
//     return newLetter
// }
    
//     console.log(onlyLetters(comboArr))



// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.

// Create a function called posString


const filterArrayValues = [58, "", "abcd", true, null, false, 0]
// // output: [58, "abcd", true]

const posString = (array) => {
    let oneType = array.filter(value => typeof value === "string", "number")
    // let oneType = array.filter(value => typeof value === "string")
    // let oneType = array.filter(value => typeof value === "string")
    let newString = oneType.filter(value => value % 2 !== ("58" || "abcd" || "true"))
    return newString
}
console.log(posString(filterArrayValues))

// 🏔 Stretch Goals
// Create a function that takes in a string and returns a new string with all the vowels removed.
// const str = "javascript is awesome"
// // output: "jvscrpt s wsm"
// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
// const arr1 = [3, 7, 10, 5, 4, 3]
// const arr2 = [7, 8, 2, 1, 5, 4]
// // output: [3, 7, 10, 5, 4, 8, 2, 1]