// Challenges
// Process: Write the test FIRST. Ensure the test fails correctly. Then write the code that will make the test pass.

//const { it } = require("node:test")

// Note: You do not need to comment out the old tests or functions. The purpose of tests are to be AUTOMATED. Commenting them out defeats that purpose.

// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.

// Input: "yes"
// Output: "drink coffee"

// Input: "no"
// Output: "keep working"

describe("soTired", () => {
    it("returns 'drink coffee' if you are tired and 'keep working' if you are not tired", () => {
        expect(soTired("yes")).toEqual("drink coffee")
        expect(soTired("no")).toEqual("keep working")
    }) 
})

// Create a function named soTired that takes a string as an argument
// has one parameter: string
// write a conditional to evaluate if string is "yes"
    // return "drink coffee"
// write a conditional to evaluate if string is "no"
    // return "keep working"

const soTired = (string) => {
    if (string === "yes"){
        return "drink coffee"
    } else if (string === "no") {
        return "keep working"
    }
}





// Create the function that will make the test pass.
// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.

// Input: "yes"
// Output: "relax"

// Input: "no"
// Output: "keep going"


describe("soStressed", () => {
    it("returns 'relax' if you are stressed and 'keep going' if you are not stressed", () => {
        expect(soStressed("yes")).toEqual("relax")
        expect(soStressed("no")).toEqual("keep going")
    }) 
})

// Create a function named soStressed that takes a string as an argument
// has one parameter: string
// write a conditional to evaluate if string is "yes"
    // return "relax"
// write a conditional to evaluate if string is "no"
    // return "keep going"

    const soStressed = (string) => {
        if (string === "yes"){
            return "relax"
        } else if (string === "no") {
            return "keep going"
        }
    }









// Create the function that will make the test pass.
// Write the test for a function that returns "in budget" if a price is lower than $300.

// Input: number lower than 300
// Output: "in budget"
// Input: number higher than 300
// Output: "not in budget"

describe("yourMoney", () => {
    it("returns 'in budget' if a price is lower than $300 or returns 'not in budget' if number higher than $300", () => {
        let inBudget = 200
        let notInBudget = 500
      expect(yourMoney(inBudget)).toEqual("in budget")
      expect(yourMoney(notInBudget)).toEqual("not in budget")
    })
  })

const yourMoney = (number) => {
    if (number < 300){
        return "in budget"
    } else if (number > 300){
        return "not in budget"
    }
}












// Create the function that will make the test pass.
// Write the test for a function that takes in two numbers and returns the smaller number.





// Create the function that will make the test pass.
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