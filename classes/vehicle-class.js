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
  wheels = 4;
  constructor(name) {
    super(name);
  }
}

class Motorcycle extends Vehicle {
  wheels = 2;
  constructor(name) {
    super(name);
  }

  wheelie() {
    return 'Wheee!';
  }
}

module.exports = {Car, Motorcycle};