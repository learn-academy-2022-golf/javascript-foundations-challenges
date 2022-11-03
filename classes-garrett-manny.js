// Coffee marker: copy the given Coffee class into a text editor
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
// Write the code that makes a black coffee object
const blackCoffee = new Coffee("black", 0, 0)
// console.log(blackCoffee)
// -> Coffee { type: 'black', cream: 0, sugar: 0 }

// Write the code that outputs the black coffee's profile
// console.log(blackCoffee.coffeeProfile())
// -> A black coffee with 0 cream, 0 sugar

// Write the code that makes a coffee object with 1 cream and 2 sugars
const sweetCoffee = new Coffee("sweet", 1, 2)
// console.log(sweetCoffee)
// -> Coffee { type: 'sweet', cream: 1, sugar: 2 }

// Write the code that outputs the 1 cream and 2 sugars coffee profile
// console.log(sweetCoffee.coffeeProfile())
// -> A sweet coffee with 1 cream, 2 sugars

// Latte Maker: create a class for Latte
// class Latte {
//     constructor() {

//     }
// }

// Write a Latte class that takes a flavor, a milk type, and a number of shots
class Latte {
    constructor(flavor, milkType, numOfShots) {
        this.flavor = flavor
        this.milkType = milkType
        this.numOfShots = numOfShots
    }
    descriptor() {
        return `This latte is ${this.flavor} flavored, made with ${this.milkType} milk and has ${this.numOfShots} shots of espresso.`
    }
}
const latte1 = new Latte('hazelnut', 'almond', 3)
// console.log(latte1)
// -> Latte { flavor: 'hazelnut', milkType: 'almond', numOfShots: 3 }

// Write a method for your Latte class that outputs the latte's profile
// console.log(latte1.descriptor())
// -> This latte is hazelnut flavored, made with almond milk and has 3 many shots of espresso.

// Write the code that makes a regular, single shot latte
const latte2 = new Latte('regular', 'regular', 1)
// console.log(latte2)
// -> Latte { flavor: 'regular', milkType: 'regular', numOfShots: 1 }

// Log the regular, single shot latte's profile
// console.log(latte2.descriptor())
// -> This latte is regular flavored, made with regular milk and has 1 many shots of espresso.

// Write the code that makes a double shot, hazelnut latte with almond milk.
const latte3 = new Latte('hazelnut', 'almond', 2)
// console.log(latte3)
// -> Latte { flavor: 'hazelnut', milkType: 'almond', numOfShots: 2 }

// Log the double shot, hazelnut latte with almond milk's profile.
// console.log(latte3.descriptor())
// -> This latte is hazelnut flavored, made with almond milk and has 2 shots of espresso.

// Volume of a Cylinder: create a class for Cylinder
class Cylinder {
    constructor(radius, height) {
        this.radius = radius
        this.height = height
    }
    volume() {
        return ((Math.PI) * this.radius * 2 * this.height).toFixed(4) 
    }
}
const cyl1 = new Cylinder(4, 5) // Testing

// Write a class that calculates the volume of a Cylinder: v = πr2h (r is the radius and h is the height of the cylinder)
// Write the code that rounds the volume of the cylinder to four decimal places
// console.log(cyl1.volume())
// -> 125.6637

// Write the code that creates three unique cylinder objects
const cyl2 = new Cylinder(3.5, 6)
const cyl3 = new Cylinder(0.5, 4)
const cyl4 = new Cylinder(2, 12)
// console.log(cyl2.volume(), cyl3.volume(), cyl4.volume())
// -> 131.9469 12.5664 150.7964


// We finished really early..
class Vehicles {
    constructor(bodyStyle, driveTrain, numOfWheels, manufacturer, origin, msrp, year) {
        this.bodyStyle = bodyStyle
        this.driveTrain = driveTrain
        this.numOfWheels = numOfWheels
        this.manufacturer = manufacturer
        this.origin = origin
        this.msrp = msrp
        this.year = year
        this.racesWon = 0
        this.currentYear = 2022
    }
    raceCars() {
        this.racesWon++
    }
    value() {
        if (this.manufacturer === "Ferrari" || this.manufacturer === "Lamborghini" || this.manufacturer === "Porsche") {
            this.msrp += (this.currentYear - this.year) * 10000
        } else {
            this.msrp -= (this.currentYear - this.year) * 2000
        }
    }
}
const ferrari438 = new Vehicles("sports coupe", "RWD", 4, "Ferrari", "Italy", 250000, 2013)
// console.log(ferrari438)
/* -> Vehicles {
  bodyStyle: 'sports coupe',
  driveTrain: 'RWD',
  numOfWheels: 4,
  manufacturer: 'Ferrari',
  origin: 'Italy',
  msrp: 250000,
  racesWon: 0
} */
ferrari438.raceCars()
// console.log(ferrari438.racesWon) // -> 1
// console.log(ferrari438.driveTrain) // -> RWD
ferrari438.value()
// console.log(ferrari438.msrp) // -> 260000

const camry = new Vehicles("economy sedan", "FWD", 4, "Toyota", "Japan", 24000, 2017)
// console.log(camry)
camry.value()
console.log(camry.msrp) // -> 14000