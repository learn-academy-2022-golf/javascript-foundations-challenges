// Coffee marker: copy the given Coffee class into a text editor
// class Coffee {
// constructor(type, cream, sugar) {
//     this.type = type.toLowerCase()
//     this.cream = cream
//     this.sugar = sugar
//   }

//   coffeeProfile() {
//     return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`
//   }

//   creams() {
//     if (this.cream > 1) {
//       return `${this.cream} creams`
//     } else {
//       return `${this.cream} cream`
//     }
//   }

//   sugars() {
//     if (this.sugar > 1) {
//       return `${this.sugar} sugars`
//     } else {
//       return `${this.sugar} sugar`
//     }
//   }
// }
// const blackCoff =  new Coffee ("black", "no", 0)
// Write the code that makes a black coffee object
// console.log(blackCoff)
// Write the code that outputs the black coffee's profile
// console.log(blackCoff.coffeeProfile())
// Write the code that makes a coffee object with 1 cream and 2 sugars
// const coffee2 = new Coffee ("latte", 1, 2)
// Write the code that outputs the 1 cream and 2 sugars coffee profile
// console.log(coffee2.coffeeProfile())
// Latte Maker: create a class for Latte
class Latte {
  constructor(type, cream, sugar) {
    this.flavor = flavor.toLowerCase();
    this.milkType = type;
    this.shots = shots;
  }

  latteProfile() {
    return `A ${this.flavor} latte with ${this.milkType()}, ${this.shots()}`;
  }

  milk() {
    if (this.milkType === "milk") {
      return `${this.type}`;
    } else {
      return `${this.type} milk`;
    }
  }

  shots() {
    if (this.shots > 1) {
      return `${this.shots} shots`;
    } else {
      return `${this.shots} shot`;
    }
  }
}
// Write a Latte class that takes a flavor, a milk type, and a number of shots
// Write a method for your Latte class that outputs the latte's profile
// Write the code that makes a regular, single shot latte
const regular = new Latte("regular", "milk", "one");
// Log the regular, single shot latte's profile
console.log(regular.latteProfile());
// Write the code that makes a double shot, hazelnut latte with almond milk.
const hazelnut = new Latte("Hazelnut", "Almond", 2);
// Log the double shot, hazelnut latte with almond milk's profile.
console.log(hazelnut.latteProfile());
// Volume of a Cylinder: create a class for Cylinder
// Write a class that calculates the volume of a Cylinder: v = πr2h (r is the radius and h is the height of the cylinder)
// Write the code that rounds the volume of the cylinder to four decimal places
// Write the code that creates three unique cylinder objects
