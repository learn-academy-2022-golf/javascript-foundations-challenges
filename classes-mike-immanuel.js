// Challenges

// Coffee marker: copy the given Coffee class into a text editor
// Write the code that makes a black coffee object
// Write the code that outputs the black coffee's profile
// Write the code that makes a coffee object with 1 cream and 2 sugars
// Write the code that outputs the 1 cream and 2 sugars coffee profile

// class Coffee {
//     constructor(type, cream, sugar) {
//       this.type = type.toLowerCase()
//       this.cream = cream
//       this.sugar = sugar
//     }
  
//     coffeeProfile() {
//       return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`
//     }
  
//     creams() {
//       if (this.cream > 1) {
//         return `${this.cream} creams`
//       } else {
//         return `${this.cream} cream`
//       }
//     }
  
//     sugars() {
//       if (this.sugar > 1) {
//         return `${this.sugar} sugars`
//       } else {
//         return `${this.sugar} sugar`
//       }
//     }
//   }

//   const black = new Coffee("black", 0, 0)
    // created new object, black
// // console.log(black)
// // --> Coffee { type: 'black', cream: 0, sugar: 0 }
    //black profile
// const sweetBlack = new Coffee("black", 1, 2)
    // created new object, sweetBlack
// console.log(sweetBlack)
// --> Coffee { type: 'black', cream: 1, sugar: 2 }
    // sweetBlack profile

     //upon return switch driver/navigator here
// Write a Latte class that takes a flavor, a milk type, and a number of shots
    //Latte Maker: create a class for Latte

class Latte {
    constructor(flavor, milk, shot) {
        this.flavor = flavor
        this.milk = milk
        this.shot = shot
    }
    latteProfile() {
        return `A ${this.flavor} flavored ${this.milk} latte with a ${this.shot} shot of esspresso.`
    }
    
}
// Write a method for your Latte class that outputs the latte's profile
let order3 = new Latte("vanilla", "coldstone", "triple")
console.log(order3.latteProfile())
// -->A vanilla flavored coldstone latte with a triple shot of esspresso.

// Write the code that makes a regular, single shot latte
const order1 = new Latte("regular", "creamer", "single")

// Log the regular, single shot latte's profile
console.log(order1)
console.log(order1.latteProfile())
// --> Latte { flavor: 'regular', milk: 'creamer', shot: 'single' }
// --> A regular flavored creamer latte with a single shot of esspresso.

// Write the code that makes a double shot, hazelnut latte with almond milk.
const order2 = new Latte("hazdelnut", "almond milk", "double")

// Log the double shot, hazelnut latte with almond milk's profile.
console.log(order2)
console.log(order2.latteProfile())
// --> Latte { flavor: 'hazdelnut', milk: 'almond milk', shot: 'double' }
// --> A hazdelnut flavored almond milk latte with a double shot of esspresso.






// Volume of a Cylinder: create a class for Cylinder

class Cylinder {
    constructor(radius, height){
        this.radius = radius
        this.height = height
    }
    cylinderVolume() {
        return `${radius} * ${radius} * ${height} * Math.PI
    }

}

// Write a class that calculates the volume of a Cylinder: v = πr2h (r is the radius and h is the height of the cylinder)
// Write the code that rounds the volume of the cylinder to four decimal places
// Write the code that creates three unique cylinder objects
