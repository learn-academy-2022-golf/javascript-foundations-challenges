// Consider this variable:

// const person = {
//   firstName: "Arthur",
//   lastName: "Dent"
// }

// Write the code that accesses the first name of the person object.
// console.log(person.firstName)
// Output: Arthur

// Write the code that accesses the last name of the person object.
// console.log(person.lastName)
// Output: Dent

// Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
// person.homePlanet = "Earth"
// console.log(person)
// Output: { firstName: 'Arthur', lastName: 'Dent', homePlanet: 'Earth' }


// Update the person object with a method that logs "Arthur Dent is from planet Earth".
// console.log(`${person.firstName} ${person.lastName} is from planet ${person.homePlanet}.`)
// Output: Arthur Dent is from planet Earth.

// Consider this variable:

// const product = {
//   name: "chair",
//   price: 24.99
// }
// Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair. It costs $24.99".
// const describeProduct = (object) => {
//     return `The product is ${product.name}. It costs $${product.price}.`
// }
// console.log(describeProduct(product))
// Output: The product is chair. It costs $24.99.

// Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7% sales tax rounded to two decimals.
// const totalWithTax = (object) => {
//     return product.price * 1.07
// }
// console.log(totalWithTax(product))
// Output: 26.7393
// console.log(totalWithTax(product).toFixed(2))
// Output: 26.74

// Consider this variable:

const lunch = {
  name: "PB and Banana",
  type: "sandwich",
  ingredients: ["bread", "peanut butter", "banana"]
}
// Write the code that accesses the ingredients property.
// console.log(lunch.ingredients)
// Output: [ 'bread', 'peanut butter', 'banana' ]

// Write the code that access the third ingredient of the lunch object.
// console.log(lunch.ingredients[2])
// Output: banana

// Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
// const lunchSandwich = (object) => {
//     return `The ingredients for a ${lunch.name} ${lunch.type} are ${lunch.ingredients.join(", ")}.`
// }
// console.log(lunchSandwich(lunch))

// Output:--> The ingredients for a PB and Banana sandwich are bread,peanut butter,banana.
//Second Output:--> The ingredients for a PB and Banana sandwich are bread peanut butter banana.
// Third Output:--> The ingredients for a PB and Banana sandwich are bread, peanut butter, banana.
// ( Note: added comma space, passed as argument for join() method, would separate the items in array).

// Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
console.log(lunch.filter((value) => "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."));
// Output:--> TypeError: lunch.filter is not a function. 
// Note:" .map()and .filter() only work on arrays..."
// Consider this variable:

// const animals = [
//   { name: "Waffles", type: "dog", age: 7 },
//   { name: "Fluffy", type: "cat", age: 14 },
//   { name: "Spelunky", type: "dog", age: 4 },
//   { name: "Hank", type: "cat", age: 11 }
// ]
// Create a function that takes in an array of animal objects and returns a new array with only the objects that are cats.
// Create a function that takes in an array of animal objects and returns a new array with only the names of the animals.
// Create a function that takes in an array of animal objects and returns a new array of the names of the animals that are more than 10 years old.
// Create a function that takes in an array of animal objects and returns a new array with a sentence about each animal.
// Consider this variable:

// const author = {
//   name: "H. G. Wells",
//   genre: "science fiction"
// }
// Write the code that destructures the author object so that the following code snippet will run successfully:
// console.log(`${name} is a ${genre} author`)
// // output: "H. G. Wells is a science fiction author"
// Consider this variable:

// const pokeOne = {
//   species: "Charmandar",
//   pokemon_type: "Fire"
// }

// const pokeTwo = {
//   species: "Magikarp",
//   pokemon_type: "Water"
// }
// Create a function called describePokemon that take an object like the ones above and uses destructuring to return a description of the Pokemon so that the following code snippet will run successfully:
// console.log(describePokemon(pokeOne))
// // output: "Charmandar is a Fire pokemon"
// console.log(describePokemon(pokeTwo))
// // output: "Magikarp is a Water pokemon"
// Consider this variable:

// const triangleDimensions = {
//   base: 2,
//   height: 5
// }
// Modify the triangleDimensions object to have a method that returns the area of the triangle.
// Write the code that will update the base to be the value of 6.
// 🏔 Stretch Goals
// Consider this variable:

// const learn = {
//   cohorts: {
//     2021: ["Alpha", "Bravo", "Charlie", "Delta", "Echo"],
//     2022: ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf"]
//   }
// }
// Write the code that logs the name of your cohort.
// Write the code that uses destructuring to log the name of your cohort.
// Create a function that takes an object like the one above and returns an array with a string of every cohort name and year.
// // output: ["2021 Alpha", "2021 Bravo", "2021 Charlie", "2021 Delta", "2021 Echo", "2022 Alpha", "2022 Bravo", "2022 Charlie", "2022 Delta", "2022 Echo", "2022 Foxtrot", "2022 Golf"]