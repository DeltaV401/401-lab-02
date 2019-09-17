'use strict';

class Validator {

  /**
   * Based on a set of rules, is the input valid?
   * TODO: Define the rules ... how do we send them in? How do we identify?
   * @param input
   * @param rules
   * @returns {boolean}
   */
  isValid = (input, rules) => {
    return true;
  };

  /**
   * Is this a string?
   * @param input
   * @returns {boolean}
   */
  isString = (input) => {
    return typeof input === 'string';
  };

  isObject = (input) => {
    return typeof input === 'object' && !(input instanceof Array);
  };

  isArray = (input, valueType) => {
    return Array.isArray(input) && (valueType ? input.every(val => typeof val === valueType) : true);
  };

  isBoolean = (input) => {
    return typeof input === 'boolean';
  };

  isNumber = (input) => {
    return typeof input === 'number';
  };

  isFunction = (input) => {
    return typeof input === 'function';
  };

  isTruthy = (input) => {
    return !!input;
  };

  isCorrectType = (input, field) => {
    switch (field.type) {
      case 'string': return isString(input);
      case 'number': return isNumber(input);
      case 'array': return isArray(input, field.valueType);
      case 'object': return isObject(input);
      case 'boolean': return isBoolean(input);
      default: return false;
    }
  };

  isValid = (schema, data) => {

    let valid = true;

    for (let fieldName in schema.fields) {

      let field = schema.fields[fieldName];

      // Am I required and set?
      let required = field.required
        ? isTruthy(data[fieldName])
        : true;

      // Am I the right type (if we even care)
      let type = field.type
        ? isCorrectType(data[fieldName], field)
        : true;

      // If anything is false ...
      if (!(required && type)) {
        valid = false;
      }

    }

    return valid;
  };
}

module.exports = Validator;

