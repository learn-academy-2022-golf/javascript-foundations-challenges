// Challenges

// Process: Write the test FIRST. Ensure the test fails correctly. Then write the code that will make the test pass.

// Note: You do not need to comment out the old tests or functions. The purpose of tests are to be AUTOMATED. Commenting them out defeats that purpose.

// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
// Create the function that will make the test pass.

// Input: Yes, No
// Output: Yes = drink coffee, No = keep working

describe("areYouTired", () => {
    it("returns 'drink coffee' if you are tired and 'keep working' if you are not tired", () => {
      expect(areYouTired("yes")).toEqual("drink coffee")
      expect(areYouTired("no")).toEqual("keep working")
    })
})

// Create a function called areYouTired that takes in a string as an argument
// One parameter: string
// Write a conditional to evaluate if the string = yes
// if it = yes returns "drink coffee"
// otherwise if string = no returns "keep working"


const areYouTired = (string) => {
  if (string === "yes") {
    return "drink coffee"
  } else if (string === "no") {
    return "keep working" // tests identify typos
  } else {
    return "oops something went wrong"
  }
}


// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.

// Write the test for a function
// Input: yes, no
// Output: yes = relax no = keep going

describe("areYouStressed", () => {
  it("returns 'relax' if you are stressed and 'keep going' if you are not stressed", () => {
    expect(areYouStressed("yes")).toEqual("relax")
    expect(areYouStressed ("no")).toEqual("keep going")
  })
})

// Create a function called areYouStressed that takes in a string as an argument
// One parameter: string
// Write a conditional to evaluate if the string = yes
// if  = yes returns "relax"
// otherwise if string = no returns "keep going"

const areYouStressed = (string) => {
  if (string === "yes") {
    return "relax"
  } else if (string === "no") {
    return "keep going" // tests identify typos
  } else {
    return "oops something went wrong"
  }
}


// Write the test for a function that returns "in budget" if a price is lower than $300.

// Write the test for a function
// Input: array with prices
// Output: array of prices less than 300 

describe ("inBudget", () => {
  it("returns 'in budget' if a price is lower than $300", () => {
    let prices = [10, 22, 33, 777, 1000, 4.59, 3.5, 499]
    let minPrice = 0
    let maxPrice = 300
    let expectedOutput = [10, 22, 33, 4.59, 3.5]
    expect(inBudget(prices, minPrice, maxPrice)).toEqual(expectedOutput)
  })
})

// Create a function called inBudget that takes in an array and two numbers as arguments
// 3 Parameters: array, num1, num2
// Use filter to iterate over array and check if in range of num1 or num2
  // num1 is less than current iteration
  // num2 is greater than current iteration
// return result

const priceFilter = (array, num1, num2) => {
  return array.filter(value => value > num1 && value < num2)



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
