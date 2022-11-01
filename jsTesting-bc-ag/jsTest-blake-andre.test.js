//cheatsheet:
//  describe("functionName", () => {
//     it("description of function", () => {
//         expect("functionName"("inputs")).toEqual("expected output")
//     })
// })

// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
    // input: "yes", "no"
    // outputs: "drink coffee", "keep working"
 describe("areYouTired", () => {
    it("returns 'drink coffee' if tired, 'keep working' if not tired", () => {
        expect(areYouTired("yes")).toEqual("drink coffee")
        expect(areYouTired("no")).toEqual("keep working")
        expect(areYouTired("fish")).toEqual("why are you doing this to me")
    })
})
//pseudocode:
    // create a function named "areYouTired"
    // create parameter "string"
    // create conditional with inputs returning expected outputs
const areYouTired = (string) => {
    if (string.toLowerCase() === "yes") {
        return "drink coffee"
    } else if (string.toLowerCase() === "no") {
        return "keep working"
    } else {
        return "why are you doing this to me"
    }
}

// Create the function that will make the test pass.
// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
 //input: "stressed" as a strign 
 //output: write an output that returns "relax" and "Keep going" 
describe("areYouStressed", () => {
    it("returns relax if stressed and keep going if not stressed", () => {
        expect(areYouStressed("yes")).toEqual("relax")
        expect(areYouStressed("no")).toEqual("keep going")
        expect(areYouStressed("Rum")).toEqual("random balogna")
    })
})

const areYouStressed = (string) => {
    if (string.toLowerCase()==="yes"){
        return "relax"
    } else if (string.toLowerCase()==="no"){
        return "keep going"
    } else {
        return "random balogna"
    }
}
// Create the function that will make the test pass.
// Write the test for a function that returns "in budget" if a price is lower than $300.
//input: 

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