// Challenges

// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt. Use .map() or .filter() to complete all of the following exercises.
// Don't forget to pseudo code.

// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
const arr1 = [3, 9, 15, 4, 10]
// // output: [30, 90, 150, 40, 100]

// Create variable named mult10
// Call the .map() method upon arr1
// Provide the .map() method with argument
// Input value (that this inputs each element from arr1) and multiply each input by 10.
// Console.log mult10
let mult10 = arr1.map(value => value * 10) 

//console.log(mult10)







// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
const arr2 = [2, 7, 3, 5, 8, 10, 13]
// // output: [7, 3, 5, 13]

// Create variable onlyOdd
// Call the .filter() method upon arr2 and provide value for the parameter and provide value % 2 !== 0 for the code block
    // Assign this to onlyOdd
// console.log onlyOdd
let onlyOdd = arr2.filter(value => value % 2 !== 0)
//console.log(onlyOdd)








// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// // output: "nicework"

// Create new function letters.
// Use built in method .filter() for comboArr.
    // Filter will use built in method typeof to discern string data.
// Create new variable lettersCombined
    // Assign letters and built in method .join("")
// Call function.
let letters = comboArr.filter(value => typeof value === "string")

let lettersCombined = letters.join("")

//console.log(lettersCombined)







// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
const filterArrayValues = [58, "", "abcd", true, null, false, 0]
// // output: [58, "abcd", true]
// create a function called trueValues
    //parameter is array
    // inside the function create an anonymous function
        //anon function will have filter built in method
            //filter method will be utilized to return values not containing the following
                //false, null, 0, or blank values
//call the function trueValues with argument filterArrayValues

const trueValues = (array) => {
    return array.filter(value => {
        return value !== false && value !== null && value !== 0 && value !== ""
    })   
}

//console.log(trueValues(filterArrayValues))

// 🏔 Stretch Goals
// Create a function that takes in a string and returns a new string with all the vowels removed.
const str = "javascript is awesome"
// // output: "jvscrpt s wsm"
const noVowels = (array) => {
    return array.filter(value => {
        return value !== array.includes("a") 
    })
}
console.log(noVowels(str))
// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
// const arr1 = [3, 7, 10, 5, 4, 3]
// const arr2 = [7, 8, 2, 1, 5, 4]
// // output: [3, 7, 10, 5, 4, 8, 2, 1]