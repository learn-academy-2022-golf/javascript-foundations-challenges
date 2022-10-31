// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
// Create function that takes an array as an argument.
// .map to multiply array values by 10.
// return .newArray
const arr1 = [3, 9, 15, 4, 10]
const mult10 = (arr) => {
    return arr.map((value) => {
        return value * 10 
    })
}
console.log(mult10(arr1))
// // output: [30, 90, 150, 40, 100]
// Write a function that takes in an array of numbers and returns a new array with only odd numbers.

const arr2 = [2, 7, 3, 5, 8, 10, 13]
const oddNumbers = (arr) => {
    return arr.filter((value) => {
        return value % 2 !=0
    })
}
console.log(oddNumbers(arr2))
// // output: [7, 3, 5, 13]
// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
// function takes array of numbers and letters
// return string with only letter
// .filter method.

const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
const onlyLetter = (arr) => {
    return arr.filter((value) => {
        return typeof value === "string"
    })
}
console.log(onlyLetter(comboArr))
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