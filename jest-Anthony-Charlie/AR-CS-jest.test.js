// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
// input: "tired" || "not tired"
// output: "Drink coffee" || "keep working!"
describe("coffee", () => {
  it("returns drink coffee if you are tired and keep working if you are not tired", () => {
    expect(coffee("tired")).toEqual("Drink coffee");
    expect(coffee("not tired")).toEqual("keep working!");
  });
});
// create a function called coffee. the function will take an argument of tired or not tired. we will use an if statement, where if the argument is tired the function will return "drink coffee". if the argument is not tired the function will return "Keep working".
const coffee = (string) => {
  if (string === "tired") {
    return "Drink coffee";
  } else if (string === "not tired") {
    return "keep working!";
  }
};
// Create the function that will make the test pass.
// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
// input: "stressed" || "not stressed"
// output: "rest" || "keep going"
describe("test", () => {
  it("returns relax if you are stressed and keep going if you are not stressed", () => {
    expect(test("stressed")).toEqual("relax");
    expect(test("not stressed")).toEqual("keep going");
  });
});
// Create the function that will make the test pass.
// create a function called test. the function will take an argument of stressed or not stressed. we will use an if statement, where if the argument is stressed the function will return "rest". if the argument is not stressed the function will return "Keep going".
const test = (string) => {
  if (string === "stressed") {
    return "relax";
  } else if (string === "not stressed") {
    return "keep going";
  }
};
// Write the test for a function that returns "in budget" if a price is lower than $300.
// input: number
// output: in budget || out of budget
describe("inBudget", () => {
  it("returns in budget if a price is lower than $300", () => {
    expect(inBudget(number < 300)).toEqual("In Budget");
  });
});
// Create the function that will make the test pass.
// create a function called inBudget. the function will take an argument of a number. we will use an if statement, where if the argument is less than 300 will return "in budget". if the argument is greater than 300 will return "out of budget".
const number = 200;
const inBudget = (number) => {
  if (number <= 300) {
    return "In Budget";
  } else if (number >= 300) {
    return "out of Budget";
  }
};
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
