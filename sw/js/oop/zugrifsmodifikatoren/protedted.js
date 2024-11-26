class Person {
    #age;
  constructor(name, age) {
    this._name = name; 
    this.#age = age; 
  }

  greet() { // Öffentliche Methode
    console.log(`Hallo, mein Name ist ${this._name} und ich bin ${this._age} Jahre alt.`);
  }
}

class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age);
    this.jobTitle = jobTitle; 
  }

  displayJob() { 
    console.log(`${this._name} ist ein(e) ${this.jobTitle}.`);
  }
}

const employee = new Employee('Alice', 28, 'Entwicklerin');
employee.greet(); 
employee.displayJob(); 
console.log(employee._name); 
console.log(employee._age); 

const person = new Person();

class Animal {
  p = new Person('Charlie', 3);
}

const animalInstance = new Animal();
console.log(animalInstance.p._name); // Charlie (zugänglich, aber sollte vermieden werden)
console.log(animalInstance.p._age); // 3 (zugänglich, aber sollte vermieden werden)