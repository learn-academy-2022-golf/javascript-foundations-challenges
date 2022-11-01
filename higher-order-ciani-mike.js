// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
const arr1 = [3, 9, 15, 4, 10]
// // output: [30, 90, 150, 40, 100]
// var nums = arr1.forEach(value => {
//     console.log(value * 10)
// })

var mult10 = arr1.map((value) =>{
    return value * 10
})
console.log(mult10)


// create function that creates a new array of the original interger multiplied by 10
// create a the function using .map high order function
// with the return of the array of mult10 times 10
// with the arguement of mult10


// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
const arr2 = [2, 7, 3, 5, 8, 10, 13]
// // output: [7, 3, 5, 13]

// let nums =(array) => {
//     let arr2 = array.filter(value => typeof value === "")
// //     return arr2
// }

var oddNums = arr2.map((value) => {
if(value % 2 != 0){
    return value 
} else(value % 2 === -1);
    return value
})
console.log("arr2",arr2)



// if(value

















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