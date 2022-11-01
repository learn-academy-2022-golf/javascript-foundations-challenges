// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
// Pseudocode:
// the "describe" block tests the "checkTired" function for expected outputs
describe ("checkTired", () => {
    it ('returns "drink coffee" if you are tired and "keep working" if you are not tired', () => {
        let output1 = "drink coffee"
        let input1 = "yes"
        let output2 = "keep working"
        let input2 = "no"
        expect (checkTired(input1)).toEqual(output1)
        expect (checkTired(input2)).toEqual(output2)
    })
})

// Create the function that will make the test pass.
const checkTired = (str1) => {
    let output1 = "drink coffee"
        let output2 = "keep working"
    if (str1 === "yes") {
        return output1
    } else if (str1 === "no") {
        return output2
    } else {
        return "Oops"
    }
}


// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
describe ("currentMood", () => {
    it ('returns "relax" if you are stressed and "keep going" if you are not stressed.', () => {
        let output1 = "relax"
        let output2 = "keep going"
        expect (currentMood("yes")).toEqual(output1)
        expect (currentMood("no")).toEqual(output2)
    })
})

// Create the function that will make the test pass.
//Pseudocode:
// Create a function called currentMood.
// Input: "yes" || "no"
// Output: "relax" || "keep going"
// if conditional, that returns relax if answer input is "yes"
// else if condition, that returns keep going if answer input is "no"
const currentMood = (str1) => {
    let output1 = "relax"
    let output2 = "keep going"
    if (str1 === "yes") {
        return output1
    } else if (str1 === "no") {
        return output2
    } else {
        return "Oops"
    }
}


// Write the test for a function that returns "in budget" if a price is lower than $300.

describe ("budgetCheck", () => {
    it ('returns "in budget" if a price is lower than $300.', () => {
        let output1 = "within budget"
        let output2 = "outside of budget"
        let output3 = "oops"
        let input1 = 50
        let input2 = 360
        let input3 = "a"
        expect (budgetCheck(input1)).toEqual(output1)
        expect (budgetCheck(input2)).toEqual(output2)
        expect (budgetCheck(input3)).toEqual(output3)
    })
})

// Create the function that will make the test pass.
// Write a function named "budgetCheck"
// Input: a number
// Use if conditional to check if the number is less than 300
    // else if the number is greater than 300
    // else "oops"
// Outputs: "within budget" or "outside of budget" or "oops"
const budgetCheck = (num1) => {
    
    if (num1 > 300){
        return "outside of budget"
    }

    else if (num1 <= 300){
        return "within budget"
    }

    else {
        return "oops"
    }
}


// Write the test for a function that takes in two numbers and returns the smaller number.
describe ("smallerOf", () => {
    it ('takes in two numbers and returns the smaller number.', () => {
        
        // Two "good testy"
        let input1 = 50
        let input2 = 360
        // let input3 = "a"
        
        // Expected outputs of two inputs
        let output1 = input1
        let output2 = input1
        let output3 = "oops"

        expect (smallerOf(input1, input2)).toEqual(output1)
        expect (smallerOf(input2, input1)).toEqual(output2)
        // expect (smallerOf(input3)).toEqual(output3)

    })
})
// Create the function that will make the test pass.
// A function named smallerOf 
// Accepts two numbers
// Returns the smaller of the two
const smallerOf = (num1, num2) => {

    if (num1 < num2){
        return num1
    } else if (num1 > num2){
        return num2
    }
    else {
        return "oops"
    }
}


// Write the test for a function that takes in one numbers and returns whether the number is odd.
// Create the function that will make the test pass.
// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
// Create the function that will make the test pass.
// Write the test for a function called rick that returns "Morty".
// Create the function that will make the test pass.
// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.
// Create the function that will make the test pass.
// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.
// Create the function that will make the test pass.
// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.
// Create the function that will make the test pass.
// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
// Create the function that will make the test pass.
// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// Create the function that will make the test pass.
// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word "fizz". If a number is a multiple of five, replace it with the word "buzz". If a number is a multiple of both 3 and 5, replace it with "fizzbuzz".
// Create the function that will make the test pass.