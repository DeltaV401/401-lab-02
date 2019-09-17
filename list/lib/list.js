'use strict';

class List {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  // I could not figure out reindex. I got confused. :)
  reindex() {
    let data = Object.keys(this.data).sort().reduce((acc,val,idx) => {
      acc[idx] = this.data[val];
      return acc;
    },{});

    this.length = Object.keys(data).length;
    this.data = data;
  }

  /**
   * Takes an input and inserts it into the end of the list.
   * @param item 
   * @returns {number}
   */
  push(item) {
    if ( arguments.length === 1 ) {
      this.data[this.length++] = item;
    }
    return this.length;
  }

  /**
   * Removes the last item in the list.
   * @returns {string}
   */
  pop() {
    if ( ! this.length ) { return undefined; }
    let item = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }

  // I don't know what reindex does so I don't know what this does.
  shift() {
    if ( ! this.data[0] ) { return undefined; }
    let item = this.data[0];
    delete this.data[0];
    this.reindex();
    return item;
  }

  // I don't know what reindex does so I don't know what this does.
  unshift(item) {
    this.data[-1] = item;
    this.reindex();
    return this.length;
  }

  /**
   * Takes in a list of any length, and calls back over each item in that list, and can be altered in various ways.
   * @param callback 
   */
  forEach(callback) {
    if ( this.length ) {
      for (let i = 0; i <= this.length - 1; i++) {
        callback(this[i], i);
      }
    }
  }

  /**
   * Takes in a list of any length, iterates over each item in that list, and changes each item, returning a new list.
   * @param callback 
   * @returns {list}
   */
  map(callback) {
    if ( ! this.length ) { return undefined; }
    let result = new List();
    for (let i = 0; i <= this.length - 1; i++) {
      result.push(callback(this.data[i], i));
    }
    return result;
  }

  /**
   * Takes in a list of any length, as well as a value type you want to return, based on whether or not it includes something, is a type of something, or can be something, then returning the new array with only items that are part of the callback.
   * @param callback 
   * @returns {list}
   */
  filter(callback) {
    if ( ! this.length ) { return undefined; }
    let result = new List();
    for (let i = 0; i <= this.length - 1; i++) {
      if (callback(this.data[i])) {
        result.push(this.data[i]);
      }
    }
    return result;
  }

  /**
   * Takes in a list of any length, a method in which you want to affect the list, and then combines the items on the list together using the method provided, until the list consists of only one item, based on your method, returning the single ending value.
   * @param callback 
   * @param state
   * @returns {value}
   */
  reduce(callback, state) {
    if ( ! this.length ) { return undefined; }
    for (let i = 0; i <= this.length - 1; i++) {
      state = callback(state,this.data[i], i);
    }
    return state;
  }

}

module.exports = List;
