/*!
 * deep-aplus <https://github.com/nknapp/deep-aplus>
 *
 * Copyright (c) 2016 Nils Knappmeier.
 * Released under the MIT license.
 */

'use strict'

var isPlainObject = require('lodash.isplainobject')

module.exports = deepAPlus

/**
 * Creates a `deep(value)`-function using the provided constructor to
 * create the resulting promise and promises for intermediate steps.
 * The `deep` function returns a promise for the resolution of an arbitrary
 * structure passed as parameter
 * @param {function} Promise class in which promises are created
 * @returns {function(*):Promise} a function that returns a promise (of the provided class)
 *   for a whole object structure
 * @public
 * @module
 */

function deepAPlus (Promise) {
  function handleArray (arr) {
    return new Promise(function (resolve, reject) {
      var counter = arr.length
      if (arr.length === 0) {
        return resolve([])
      }
      var result = []
      arr.forEach(function (element, index) {
        handleAny(element).then(function (value) {
          result[index] = value
          counter--
          if (counter === 0) {
            resolve(result)
          }
        }, function (err) {
          reject(err)
        })
      })
    })
  }

  function handleObject (obj) {
    var keys = Object.keys(obj)
    var values = keys.map(function (key) {
      return obj[key]
    })
    return handleArray(values).then(function (valueResults) {
      var result = {}
      for (var i = 0; i < keys.length; i++) {
        result[keys[i]] = valueResults[i]
      }
      return result
    })
  }

  /**
   * Check if this is something like a promise (taken from the Q-module)
   * @param {*} obj the object to check for being a promise
   * @returns {boolean} true, if the object is a promise
   * @private
   */
  function isPromiseAlike (obj) {
    return obj === Object(obj) && typeof obj.then === 'function'
  }

  /**
   * Return a promise for an object, array, or other value, with all internal promises resolved.
   * @param {*} obj
   * @returns {Promise<*>}
   * @private
   */
  function handleAny (obj) {
    if (isPromiseAlike(obj)) {
      return obj.then(handleAny)
    } else if (isPlainObject(obj)) {
      return handleObject(obj)
    } else if (Object.prototype.toString.call(obj) === '[object Array]') {
      return handleArray(obj)
    } else {
      return new Promise(function (resolve, reject) {
        return resolve(obj)
      })
    }
  }

  return handleAny
}
