'use strict';

class Vehicle {
  constructor(name, wheels) {
    name;
    wheels;
  }

  drive() {
    return 'Moving Forward';
  }

  stop() {
    return 'Stopping';
  }
}

class Car extends Vehicle {
  constructor(name, wheels) {
    super(name);
    wheels;
  }
}

class Motorcycle extends Vehicle {
  constructor(name, wheels) {
    super(name);
    wheels;
  }

  wheelie() {
    return 'Wheee!';
  }
}

module.exports = {Car, Motorcycle};