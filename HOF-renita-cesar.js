
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt. Use .map() or .filter() to complete all of the following exercises.
// Don't forget to pseudo code.

// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
const arr1 = [3, 9, 15, 4, 10]
// // output: [30, 90, 150, 40, 100]
// Create a function named mult10
// The parameter will be named array
// Use arr1.map to iterate through the array and crate a new array of the same length
// Return an array using map, applied to the array, that has a parameter of value, and returns value * 10

const mult10 = (array) => {return array.map((value) => value * 10)}

console.log(mult10(arr1))

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
const arr2 = [2, 7, 3, 5, 8, 10, 13]
// // output: [7, 3, 5, 13]
// We will use .filter
// Declare a function that takes an array as the parameter, and then uses .filter on that array, named oddNum
// return a higher order function that takes in the value. That will in turn, return only the values that are odd 
const oddNum = (array) => {
    return array.filter((value) => value % 2 !== 0)
}
console.log(oddNum(arr2))


// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// // output: "nicework"
const lettersOnly = (array) => {
    let lettersArray = array.filter((value) => typeof value == "string")
    return lettersArray.join("")
}
console.log(lettersOnly(comboArr))

// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
const filterArrayValues = [58, "", "abcd", true, null, false, 0]
// output: [58, "abcd", true]

/*
Create a function called truthy
With a parameter of someArray
Use the .filter() method and input a function of

Return a boolean value -> w/out false, null, 0, or blank values
*/

const truthy = (someArray) => {
    return someArray.filter(value => value != false && value != null && value != 0 && value != "")
}

console.log(truthy(filterArrayValues))

// 🏔 Stretch Goals
// Create a function that takes in a string and returns a new string with all the vowels removed.
const str = "javascript is awesome"
// output: "jvscrpt s wsm"

/*
Create a function called removeVowels
Takes a parameter of  anyString
Use method .split("") to convert the string into an array called letterArray
Use method .filter() on letter array to only include consonants
*/

const removeVowels = (anyString) => {
    let letterArray = anyString.split("")
    let  consonantLetterArray = letterArray.filter(value => {
        return value == "a" || "e" || "i" || "o" || "u"
    })
    console.log(consonantLetterArray)
    return consonantLetterArray.join("")
}

console.log(removeVowels(str))

// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
// const arr1 = [3, 7, 10, 5, 4, 3]
// const arr2 = [7, 8, 2, 1, 5, 4]
// // output: [3, 7, 10, 5, 4, 8, 2, 1]
