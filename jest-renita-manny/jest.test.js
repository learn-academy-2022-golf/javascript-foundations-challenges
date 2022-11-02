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
describe("smallNum", () => {
    it("takes in two numbers and returns the smaller number", () => {
        expect(smallNum(1, 7)).toEqual(1)
        expect(smallNum(87, 43)).toEqual(43)
        expect(smallNum(5, 5)).toEqual("same numbers")
    })
})

// Create the function that will make the test pass.
const smallNum = (num1, num2) => {
    if (num1 > num2) {
        return num2
    } else if (num1 < num2) {
        return num1
    } else {
        return "same numbers"
    }
}

// Write the test for a function that takes in one numbers and returns whether the number is odd.
describe("oddOrNot", () => {
    it("takes in one numbers and returns whether the number is odd", () => {
        expect(oddOrNot(3)).toEqual("odd")
        expect(oddOrNot(4)).toEqual("even")
    })
})

// Create the function that will make the test pass.
const oddOrNot = (number) => {
    if (number % 2 !== 0) {
        return "odd"
    } else if (number % 2 === 0) {
        return "even"
    }
}

// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
describe("fruitColor", () => {
    it ("takes in a fruit and returns 'yellow' if the argument is banana, 'red' if apple and 'purple' if grape", () => {
        expect(fruitColor("banana")).toEqual("yellow")
        expect(fruitColor("apple")).toEqual("red")
        expect(fruitColor("grape")).toEqual("purple")
        expect(fruitColor("orange")).toEqual("unknown color")
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
        return "unknown color"
    }
}

// Write the test for a function called rick that returns "Morty".
describe("rick", () => {
    it ("function called rick that returns 'Morty'", () => {
        expect(rick()).toEqual("Morty")
    })
})

// Create the function that will make the test pass.
const rick = () => "Morty"
// OR
// const rick = () => {
//     return "Morty"
// }

// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.
describe("greeter", () => {
    it ("takes a name as an argument and returns a greeting with that name to the screen", () => {
        expect(greeter("Manny")).toEqual("Hello, Manny!")
        expect(greeter("Renita")).toEqual("Hello, Renita!")
    })
})

// Create the function that will make the test pass.
const greeter = (yourName) => {
    return `Hello, ${yourName}!`
}

// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.
describe("oddOrEven", () => {
    it("takes a number as an argument and logs whether the number is odd or even", () => {
        expect(oddOrEven(3)).toEqual("odd")
        expect(oddOrEven(4)).toEqual("even")
    })
})

// Create the function that will make the test pass.
const oddOrEven = (number) => {
    if (number % 2 !== 0) {
        return "odd"
    } else if (number % 2 === 0) {
        return "even"
    }
}

// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.
describe("doubler", () => {
    it("takes a number and returns the result of the number multiplied by 2", () => {
        expect(doubler(7)).toEqual(14)
    })
})

// Create the function that will make the test pass.
const doubler = (number) => {
    return number * 2
}

// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
describe("multiply", () => {
    it("takes two numbers as arguments and logs the result of one of the numbers multiplied by the other", () => {
        expect(multiply(3, 4)).toEqual(12)
    })
})

// Create the function that will make the test pass.
const multiply = (num3, num4) => {
    return num3 * num4
}
 
// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
describe("divisibleBy", () => {
    it ("takes two numbers as arguments and returns whether the first number is evenly divisible by the second", () => {
        expect(divisibleBy(10, 5)).toEqual("10 is evenly divisible by 5")
        expect(divisibleBy(11, 5)).toEqual("11 is not evenly divisible by 5")
    })
})

// Create the function that will make the test pass.
const divisibleBy = (num5, num6) => {
    if (num5 % num6 === 0) {
        return `${num5} is evenly divisible by ${num6}`
    } else if (num5 % num6 !== 0) {
        return `${num5} is not evenly divisible by ${num6}`
    }
}

// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word "fizz". If a number is a multiple of five, replace it with the word "buzz". If a number is a multiple of both 3 and 5, replace it with "fizzbuzz".
describe("fizzbuzz", () => {
    it ("If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'", () => {
        expect(fizzbuzz(6)).toEqual("fizz")
        expect(fizzbuzz(10)).toEqual("buzz")
        expect(fizzbuzz(15)).toEqual("fizzbuzz")
    })
})

// Create the function that will make the test pass.
const fizzbuzz = (num7) => {
    if (num7 % 5 === 0 && num7 % 3 === 0) {
        return "fizzbuzz"
    } else if (num7 % 5 === 0) {
        return "buzz"
    } else if (num7 % 3 === 0) {
        return "fizz"
    }
}