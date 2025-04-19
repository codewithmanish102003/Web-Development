// Example of getter and setter in JavaScript

// Creating a class with getter and setter methods
class Person {
  constructor(firstName, lastName, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
  }

  // Getter for full name
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  // Getter for age
  get age() {
    return this._age;
  }

  // Setter for age with validation
  set age(newAge) {
    if (newAge < 0) {
      console.error("Age cannot be negative");
      return;
    }
    this._age = newAge;
  }

  // Getter for firstName
  get firstName() {
    return this._firstName;
  }

  // Setter for firstName
  set firstName(newFirstName) {
    if (typeof newFirstName !== 'string' || newFirstName.trim() === '') {
      console.error("First name must be a non-empty string");
      return;
    }
    this._firstName = newFirstName;
  }
}

// Creating an instance of Person
const person = new Person("John", "Doe", 30);

// Using getters
console.log(person.fullName); // Output: John Doe
console.log(person.age);      // Output: 30

// Using setters
person.age = 31;
console.log(person.age);      // Output: 31

// Invalid age value
person.age = -5;              // Output: Age cannot be negative

// Changing first name
person.firstName = "Jane";
console.log(person.fullName); // Output: Jane Doe

// Object literal with getter and setter
const car = {
  _make: "Toyota",
  _model: "Corolla",
  _year: 2020,
  
  // Getter
  get description() {
    return `${this._year} ${this._make} ${this._model}`;
  },
  
  // Setter
  set year(newYear) {
    if (newYear < 1900 || newYear > new Date().getFullYear()) {
      console.error("Invalid year");
      return;
    }
    this._year = newYear;
  }
};

// Using object literal getter
console.log(car.description); // Output: 2020 Toyota Corolla

// Using object literal setter
car.year = 2022;
console.log(car.description); // Output: 2022 Toyota Corolla
