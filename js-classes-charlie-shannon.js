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
//   Write the code that makes a black coffee object

//create new variable as blackCoffee
  //make new variable equivalent to new class
  //define the constructor(type=black, cream=0, sugar=0)
//log the variable blackCoffee

var blackCoffee = new Coffee ("black", 0, 0)
//console.log(blackCoffee)

//output: Coffee { type: 'black', cream: 0, sugar: 0 }

// Write the code that outputs the black coffee's profile

//Utilizing the new variable of black coffee
  //Use dot notation to use the method of coffeeProfile to create the profile
//log blackCoffee.coffeeProfile()

//console.log(blackCoffee.coffeeProfile())

//output:A black coffee with 0 cream, 0 sugar

// Write the code that makes a coffee object with 1 cream and 2 sugars

//Create a new variable called newCoffee
  //make it equivalent to new Coffee with the type=regular, cream=1, sugar=2.
//log the new variable newCoffee

var newCoffee = new Coffee ("regular", 1, 2)
// console.log(newCoffee)

// output:Coffee { type: 'regular', cream: 1, sugar: 2 }

// Write the code that outputs the 1 cream and 2 sugars coffee profile

//console.log(newCoffee.coffeeProfile())

//output:A regular coffee with 1 cream, 2 sugars

// Latte Maker: create a class for Latte

//create a class called Latte with curly braces

class Latte {
    constructor(flavor, milk, shot) {
      this.flavor = flavor.toLowerCase()
      this.milk = milk.toLowerCase()
      this.shot = shot
    }
  
    latteProfile() {
      return `A ${this.flavor} latte with ${this.milk()}, ${this.shot()}`
    }
  
    shots() {
      if (this.shot > 1) {
        return `${this.shot} shots`
      } else {
        return `${this.shot} shot`
      }
    }
  }

// Write a Latte class that takes a flavor, a milk type, and a number of shots

//inside the curly braces input a constructor and the three parameters (flavor, a milk type, and a number of shots)
  //inside the curly braces of constructor use this built in method to reference the names of the (flavor, a milk type, and a number of shots)
  // build in method to lowercase is for any uppercases in the argument of flavor and milk
// create method shots to utilize an if statement identifing the number of shots in the shots parameter
    //re
    
// Write a method for your Latte class that outputs the latte's profile
// Write the code that makes a regular, single shot latte
// Log the regular, single shot latte's profile
// Write the code that makes a double shot, hazelnut latte with almond milk.
// Log the double shot, hazelnut latte with almond milk's profile.
// Volume of a Cylinder: create a class for Cylinder
// Write a class that calculates the volume of a Cylinder: v = πr2h (r is the radius and h is the height of the cylinder)
// Write the code that rounds the volume of the cylinder to four decimal places
// Write the code that creates three unique cylinder objects


