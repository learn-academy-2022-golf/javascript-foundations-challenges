// Challenges
// Process: Write the test FIRST. Ensure the test fails correctly. Then write the code that will make the test pass.

// Note: You do not need to comment out the old tests or functions. The purpose of tests are to be AUTOMATED. Commenting them out defeats that purpose.

// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.

/* describe(“functionName”, () => {
    it(“describe what functionName does here”, () => {
        expect(functionName(“pass argument as needed”)).toEqual(“expected output”)
     })
  }) */

describe("workFlow", () => {
    it("returns 'drink coffee' if you are tired and 'keep working' if you are not tired.", () => {
        expect(workFlow("tired")).toEqual("drink coffee")
        expect(workFlow("not tired")).toEqual("keep working")
        expect(workFlow("excited")).toEqual("oops! something went wrong")
    })
})

// Create the function that will make the test pass.
const workFlow = (string) => {
    if(string === "tired"){
        return "drink coffee"
    } else if(string ==="not tired"){
        return "keep working"
    } else {
        return "oops! something went wrong"
    }
}


// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
describe("areYouStressed", () => {
    it("returns 'relax' if you are stressed and 'keep going' if you are not stressed.", () => {
        expect(areYouStressed("stressed")).toEqual("relax")
        expect(areYouStressed("not stressed")).toEqual("keep going")
        expect(areYouStressed("excited")).toEqual("oops! something went wrong")
    })
})

// Create the function that will make the test pass.
const areYouStressed = (string) => {
    if(string === "stressed"){
        return "relax"
    } else if(string ==="not stressed"){
        return "keep going"
    } else {
        return "oops! something went wrong"
    }
}

// Write the test for a function that returns "in budget" if a price is lower than $300.
describe("budgetPlanning", () => {
    it("returns 'in budget' if a price is lower than $300.", () => {
        expect(budgetPlanning(100)).toEqual("in budget")
        expect(budgetPlanning(400)).toEqual("over budget")
        expect(budgetPlanning(NaN)).toEqual("please type a number")
    })
})

// Create the function that will make the test pass.
const budgetPlanning = (number) => {
    if(number < 300){
        return "in budget"
    } else if(number >= 300){
        return "over budget"
    } else {
        return "please type a number"
    }
}

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