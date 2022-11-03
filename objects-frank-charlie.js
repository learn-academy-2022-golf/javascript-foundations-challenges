// Consider this variable:

// const person = {
//   firstName: "Arthur",
//   lastName: "Dent"
// }

// Write the code that accesses the first name of the person object.

// Log the object in the console
// console.log(person)
// To access the first name we use dot notation and the symbol firstName
// console.log(person.firstName)


// Write the code that accesses the last name of the person object.

// Log the object in the console
// console.log(person)
// To access the last name we use dot notation and the symbol lastName
// console.log(person.lastName)


// Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
// Modify original person object
// const person = {
//     firstName: "Arthur",
//     lastName: "Dent",
//     homePlanet: "Earth"
// }
// Call the person object
// console.log(person)


// Update the person object with a method that logs "Arthur Dent is from planet Earth".
// const person = {
//     firstName: "Arthur",
//     lastName: "Dent",
//     homePlanet: "Earth",
//     Arthur: function() {
//         return "Arthur Dent is from planet Earth"
//     }
// }
// Log the output of the Arthur method within the person object
// console.log(person.Arthur())


// Consider this variable:

// const product = {
//   name: "chair",
//   price: 24.99
// }
// Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair. It costs $24.99".

//Create a function called describeProduct.
  //The function will take an argument called object.
  //The function will return "The product is a chair. It costs $24.99"
//Call the function with product as the argument.

const describeProduct= (product) => {
    return (`The product is a ${product.name}. It costs $${product.price}`)
}
//console.log(describeProduct(product))
//output:The product is a chair. It costs $24.99

const product = {
  name: "chair",
  price: 24.99
}

// Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7% sales tax rounded to two decimals.

//Write a function called totalWithTax.
  //The function will take the product as an argument
  //Return the total price of the chair that includes a 7% sales tax rounded to two decimals
//Log the function with product as an argument

const totalWithTax = (object) => {
   let totalPrice = (object.price * .07 + object.price).toFixed(2)
   return totalPrice
}
//console.log(totalWithTax(product))

//output: 26.74
// Consider this variable:

// const lunch = {
//    name: "PB and Banana",
//    type: "sandwich",
//    ingredients: ["bread", "peanut butter", "banana"]
//  }
// Write the code that accesses the ingredients property.

//Log lunch.ingredients to access the lunch object utilizing dot notation.

//console.log(lunch.ingredients)

// output:[ 'bread', 'peanut butter', 'banana' ]

// Write the code that access the third ingredient of the lunch object.

//Log lunch.ingredients to access the lunch object utilizing dot notation.
  //add[2] to get the third position or index of the array

  //console.log(lunch.ingredients[2])

  //output: banana

  const lunch = {
    name: "PB and Banana",
    type: "sandwich",
    ingredients: ["bread", "peanut butter", "banana"]
    together: =() {
      return `The ingredients for a ${this.name} ${this.type} are ${this.ingredients}.`
    }
  }

// Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
// Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
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