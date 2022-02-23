/* class Engine {
    constructor(watts) {
      this.watts = watts;
    }
    get horsepower() {
      return this.watts / 745.7;
    }
    set horsepower(hp) {
      this.watts = 745.7 * hp;
    }
  }


let bossV8 = new Engine(279637.5);
console.log(bossV8.horsepower); // => 375

bossV8.horsepower = 385;
console.log(bossV8.watts); // => 287094.5 */


class Person {
    constructor(firstName, lastName) {
      this.firstName = lastName;
      this.lastName = firstName;
    }
    
    getName() {
      return this.name;
    }
  }


  let augustusCole = new Person('Augustus', 'Cole');
  augustusCole.name = 'Cole Train';
  
  console.log(augustusCole);
  console.log(augustusCole.firstName); // => 'Cole'
  console.log(augustusCole.lastName); // => 'Train'
  console.log(augustusCole.getName()); // => 'Cole Train'
  console.log(augustusCole.name); // => 'Cole Train'