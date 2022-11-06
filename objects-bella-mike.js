// Challenges
// Consider this variable:

// const person = {
//   firstName: "Arthur",
//   lastName: "Dent",
//   homePlanet: "Earth",
//   string: function (){
//     return `${this.firstName} ${this.lastName} is from planet ${this.homePlanet}.`
//   }
// }

// Write the code that accesses the first name of the person object.
// console.log(person.firstName)

// Write the code that accesses the last name of the person object.
// console.log(person.lastName)

// Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
    // see above object

// Update the person object with a method that logs "Arthur Dent is from planet Earth".
// console.log(person.string())



// Consider this variable:

const product = {
  name: "chair",
  price: 24.99,
  tax: .07,
  describeProduct: function () {
    return `The product is a ${this.name}.  It costs $${this.price}.`
  },
  salesTax: function () {
    return `${this.price}` * `${this.tax}`
  },
  taxRound: function (){
        return Math.round(this.salesTax() * 100) / 100
      },
  totalWithTax: function () {
    return this.price + (this.taxRound())
  }
}
// Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair. It costs $24.99".
// console.log(product.describeProduct())

// Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7% sales tax rounded to two decimals.
// should output totalWithTax price $26.74
// console.log(product.salesTax())
// console.log(product.taxRound())
// console.log(product.totalWithTax())



// Consider this variable:

const lunch = {
  name: "PB and Banana",
  type: "sandwich",
  ingredients: ["bread", "peanut butter", "banana"],
  ingredients1: function () {
    return `The ingredients for a ${this.name} ${this.type} are ${this.ingredients}`
  }
}
// Write the code that accesses the ingredients property.
// console.log(lunch.ingredients)

// Write the code that access the third ingredient of the lunch object.
// console.log(lunch.ingredients[2])

// Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
// console.log(lunch.ingredients1())

// Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
const ingredients2 = (array) => {
   return array.filter((object) => {
    typeof object.type === this.ingredients1
  })
}
console.log(ingredients2(lunch))

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
