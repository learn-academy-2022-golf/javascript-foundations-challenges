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
const blackCoffee = new Coffee ("black",0,0) 
console.log(blackCoffee)
console.log(blackCoffee.coffeeProfile())
const renitaCoffee = new Coffee ("Renita",1,2) 
console.log(renitaCoffee.coffeeProfile())
// Coffee marker: copy the given Coffee class into a text editor
// Write the code that makes a black coffee object
// Write the code that outputs the black coffee's profile
// Write the code that makes a coffee object with 1 cream and 2 sugars
// Write the code that outputs the 1 cream and 2 sugars coffee profile
class Latte {
    constructor(flavor, milk, shots) {
      this.flavor =flavor
      this.milk = milk
      this.shots = shots
    }
    latteProfiile() {
        return `"Your ${this.flavor} latte with ${this.milk} milk, ${this.shots} is ready!"`
    }
}



// Latte Maker: create a class for Latte
// Write a Latte class that takes a flavor, a milk type, and a number of shots
// Write a method for your Latte class that outputs the latte's profile
// Write the code that makes a regular, single shot latte
const latte1 = new Latte ("regular","whole","1shot")

// Log the regular, single shot latte's profile
console.log(latte1.latteProfiile())

// Write the code that makes a double shot, hazelnut latte with almond milk.
const latte2 = new Latte ("hazelnut", "almond", "double shot")

// Log the double shot, hazelnut latte with almond milk's profile.
console.log(latte2.latteProfiile())


// Volume of a Cylinder: create a class for Cylinder
class Cylinder {
  constructor(radius, height) {
    this.radius = radius
    this.height = height
  }
  volume() {
    const cylinderVolume = Math.PI * (this.radius ** 2) * this.height
    return Number(cylinderVolume.toFixed(4))
  }
}

const cylinder1 = new Cylinder(3, 4)
const cylinder2 = new Cylinder(6, 10)
const cylinder3 = new Cylinder(1, 4)
// Write a class that calculates the volume of a Cylinder: v = πr2h (r is the radius and h is the height of the cylinder)
// Write the code that rounds the volume of the cylinder to four decimal places
// Write the code that creates three unique cylinder objects

console.log(cylinder1.volume())
console.log(cylinder2.volume())
console.log(cylinder3.volume())

//-------------------Practice!

