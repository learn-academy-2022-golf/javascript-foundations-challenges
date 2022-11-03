// Coffee marker: copy the given Coffee class into a text editor
// Write the code that makes a black coffee object
// Write the code that outputs the black coffee's profile
// Write the code that makes a coffee object with 1 cream and 2 sugars
// Write the code that outputs the 1 cream and 2 sugars coffee profile
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
// const blackCoffee = new Coffee("black", "no", "no")
// console.log(blackCoffee.coffeeProfile())

const coffee1 = new Coffee("light roast", 1, 2)
console.log(coffee1.coffeeProfile())

// Latte Maker: create a class for Latte
class Latte {
    constructor(flavor, milk, shots) {
      this.flavor = flavor
      this.milk = milk
      this.shots = shots
    } 

    latteProfile() {
      return `A ${this.milk} latte with ${this.flavor}, ${this.shots} shot`
    }
}

const latte1 = new Latte("no flavor", "whole milk", 1)
console.log(latte1.latteProfile())

// Write a Latte class that takes a flavor, a milk type, and a number of shots

// Write a method for your Latte class that outputs the latte's profile

// Write the code that makes a regular, single shot latte

// Log the regular, single shot latte's profile

// Write the code that makes a double shot, hazelnut latte with almond milk.

const latte2 = new Latte("hazelnut", "almond milk", "double")
console.log(latte2.latteProfile())

// Log the double shot, hazelnut latte with almond milk's profile.

// Volume of a Cylinder: create a class for Cylinder
// Write a class that calculates the volume of a Cylinder: v = πr2h (r is the radius and h is the height of the cylinder)
// Write the code that rounds the volume of the cylinder to four decimal places
// Write the code that creates three unique cylinder objects

class Cylinder {
  constructor(height, radius) {
    this.height = height
    this.radius = radius
    this.volume = Math.PI * Math.pow(this.radius, 2) * this.height
  }
  getVolume() {
    return this.volume.toFixed(4)
  }
} 

const cyl1 = new Cylinder(7, 5)
console.log(cyl1.getVolume())