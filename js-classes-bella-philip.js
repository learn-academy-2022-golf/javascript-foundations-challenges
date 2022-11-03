// Coffee maker: copy the given Coffee class into a text editor ✅
// Write the code that makes a black coffee object✅
// Write the code that outputs the black coffee's profile✅
// Write the code that makes a coffee object with 1 cream and 2 sugars✅
// Write the code that outputs the 1 cream and 2 sugars coffee profile✅

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

  let blackCoffee = new Coffee("black", 0, 0)
  let matchaLatte = new Coffee("matcha latte", 1, 2)
  console.log(blackCoffee.coffeeProfile())
  console.log(matchaLatte.coffeeProfile())



class Latte {
    constructor(flavor, milkType, shot){
      // property === parameter
        this.flavor = flavor.toLowerCase()
        this.milkType = milkType
        this.shot = shot
    }
    latteProfile(){
        return `A ${this.flavor} latte with ${this.milkType} milk and ${this.shots()}.`
    }

    shots() {
      if (this.shot > 1) {
        return `${this.shot} shots`
      } else {
        return `${this.shot} shot`
      }
    }


}

let regularLatte = new Latte("Regular", "almond", 1)
console.log(regularLatte.latteProfile())

let doubleShot = new Latte("Hazelnut", "almond", 2)
console.log(doubleShot.latteProfile())

// Latte Maker: create a class for Latte✅
// Write a Latte class that takes a flavor, a milk type, and a number of shots✅
// Write a method for your Latte class that outputs the latte's profile✅
// Write the code that makes a regular, single shot latte✅
// Log the regular, single shot latte's profile✅
// Write the code that makes a double shot, hazelnut latte with almond milk.✅
// Log the double shot, hazelnut latte with almond milk's profile.✅


// Volume of a Cylinder: create a class for Cylinder✅
// Write a class that calculates the volume of a Cylinder: v = πr2h (r is the radius and h is the height of the cylinder)✅
// Write the code that rounds the volume of the cylinder to four decimal places✅
// Write the code that creates three unique cylinder objects✅

class Cylinder {
  constructor(pie, radius, height) {
    this.pie = pie
    this.radius = radius
    this.height = height
  }
  
  // message(){
  //   return `The volume of this cylinder is ${this.formula}`
  // }

  formula(){
    return (this.pie * this.radius * 2 * this.height).toFixed(4)
  }
}

let cylinder1 = new Cylinder(3.14, 6, 15)
console.log(cylinder1.formula())
let cylinder2 = new Cylinder(3.14, 9.5467, 23.62)
console.log(cylinder2.formula())
let cylinder3 = new Cylinder(3.14, 97.58736, 64)
console.log(cylinder3.formula())