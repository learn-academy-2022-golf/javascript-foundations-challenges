// Challenges
// Coffee marker: copy the given Coffee class into a text editor
// Write the code that makes a black coffee object

    // var blackCoffee = new Coffee ("black","0","0")
    // console.log (blackCoffee)

// Write the code that outputs the black coffee's profile
// console.log(blackCoffee.coffeeProfile())

// Write the code that makes a coffee object with 1 cream and 2 sugars
// var newCoffee = new Coffee ("any", 1, 2)
// console.log(newCoffee)


// Write the code that outputs the 1 cream and 2 sugars coffee profile

// var newCoffee = new Coffee ("large", 1, 2)
// console.log(newCoffee)

// console.log(newCoffee.coffeeProfile())


class Coffee {
  constructor(type, cream, sugar) {
    this.type = type.toLowerCase()
    this.cream = cream
    this.sugar = sugar


  }


  coffeeProfile() {
    return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`
  }

  creams() {
    if (this.cream > 1) {
      return `${this.cream} creams`
    } else {
      return `${this.cream} cream`
    }
  }

  sugars() {
    if (this.sugar > 1) {
      return `${this.sugar} sugars`
    } else {
      return `${this.sugar} sugar`
    }
  }
}
var blackCoffee = new Coffee ("black","0","0")
    console.log (blackCoffee)

// console.log(blackCoffee)
// console.log(blackCoffee.coffeeProfile())

// console.log(blackCoffee.sugar)


var newCoffee = new Coffee ("large", 1, 2)
console.log(newCoffee)

console.log(newCoffee.coffeeProfile())





// Latte Maker: create a class for Latte
// Write a Latte class that takes a flavor, a milk type, and a number of shots
// Write a method for your Latte class that outputs the latte's profile
// Write the code that makes a regular, single shot latte
// Log the regular, single shot latte's profile
// Write the code that makes a double shot, hazelnut latte with almond milk.
// Log the double shot, hazelnut latte with almond milk's profile.

class Latte {
  constructor(flavor, milk, shots) {
    this.flavor = flavor.toLowerCase()
    this.milk = milk
    this.shots = shots
  }

  latteProfile() {
    return `A ${this.flavor} latte with ${this.milk}, ${this.shots()}`
  }

  shots() {
    if (this.shots > 1) {
      return `${this.cream} creams`
    } else {
      return `${this.cream} cream`
    }
  }
  
  
  shots() {
      return `${this.shots} shots`
    } 
    }

var regLatte = new Latte ("regular", "almond milk", "1")
console.log(regLatte.latteProfile())


// creams() {
//   if (this.cream > 1) {
//     return `${this.cream} creams`
//   } else {
//     return `${this.cream} cream`
//   }
// }

class Latte {
  constructor(flavor, milk, shot) {
    this.flavor = flavor.toLowerCase()
    this.milk = milk
    this.shot = shot
  }

  coffeeProfile() {
    return `A ${this.flavor} latte with ${this.milk}, and ${this.shots()}`
  }

  shots() {
    if (this.shot > 1) {
      return `${this.shot} shots`
    } else {
      return `${this.shot} shot`
    }
  }
}
var regLatte = new Latte ("regular", "regular milk", 1)
console.log(regLatte.coffeeProfile())

var hazelnut = new Latte ("hazelnut", "almond milk", 2)
console.log(hazelnut.coffeeProfile())

// var blackCoffee = new Coffee ("black", 0, 0)

// console.log(blackCoffee.coffeeProfile())

// var regCoffee = new Coffee ("regular", 1, 2)
// console.log(regCoffee.coffeeProfile())

class Cylinder {
  constructor(radius, height) {
    this.radius = radius
    this.height = height
  }
volumeProfile() {
  return `v = (3.14 * ${this.radius)`
}
}