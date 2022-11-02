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
//input: number
//output: "in budget" if less than 300, "out of budget" if over or equal to 300
 describe("budget", () => {
    it("returns 'in budget' if input less than 300, returns 'out of budget' if input over or equal to 300", () => {
        expect(budget("75")).toEqual("in budget")
        expect(budget("301")).toEqual("out of budget")
    })
})
// Create the function that will make the test pass.
const budget = (num) => {
    if (num < 300) {
        return "in budget"
    } else if (num >= 300) {
        return "out of budget"
    } else {
        return "not an acceptable number"
    }
}
// Write the test for a function that takes in two numbers and returns the smaller number.
// input: num1, num2
// output: smaller number
 describe("smallerNum", () => {
    it("takes two numbers and returns smaller number", () => {
        expect(smallerNum(2, 5)).toEqual(2)
        expect(smallerNum(6, 8)).toEqual(6)
    })
})
// Create the function that will make the test pass.
const smallerNum = (num1, num2) => {
    if (num1 > num2) {
        return num2
    } else if (num1 < num2) {
        return num1
    } else {
        return "equal or not a number"
    }
}
// Write the test for a function that takes in one numbers and returns whether the number is odd.
// input: number
// output: odd or not
 describe("oddBall", () => {
    it("takes a number, and returns 'odd' if the number is odd, or 'even' if number is even", () => {
        expect(oddBall(5)).toEqual("odd")
        expect(oddBall(6)).toEqual("even")
    })
})
// Create the function that will make the test pass.
const oddBall = (num) => {
    if (num % 2 === 0) {
        return "even"
    } else {
        return "odd"
    }
}
// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
//input: fruit
//output: "yellow", "red", "purple"
 describe("fruitColor", () => {
    it("returns 'yellow' if fruit is banana, returns 'red' if fruit is apple, returns 'purple' if fruit is grape", () => {
        expect(fruitColor("banana")).toEqual("yellow")
        expect(fruitColor("apple")).toEqual("red")
        expect(fruitColor("grape")).toEqual("purple")
    })
})
// Create the function that will make the test pass.
const fruitColor = (fruit) => {
    if (fruit === "banana") {
        return "yellow"
    } else if (fruit === "apple") {
        return "red"
    } else if (fruit === "grape") {
        return "purple"
    } else {
        return "unacceptable as fruit"
    }
}
// Write the test for a function called rick that returns "Morty".
// input: none
// output: "Morty"
 describe("rick", () => {
    it("returns 'Morty'", () => {
        expect(rick()).toEqual("Morty")
    })
})
// Create the function that will make the test pass.
const rick = () => {
    return "Morty"
}
// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.
//input: name
//output: "Hello 'name'"
 describe("greeter", () => {
    it("returns greeting using a given name", () => {
        expect(greeter("andre")).toEqual("Howdy andre!")
        expect(greeter("milo")).toEqual("Howdy milo!")
    })
})
// Create the function that will make the test pass.
const greeter = (string) => {
    return `Howdy ${string}!`
}
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