# deep-aplus 

[![NPM version](https://badge.fury.io/js/deep-aplus.svg)](http://badge.fury.io/js/deep-aplus)
[![Travis Build Status](https://travis-ci.org/nknapp/deep-aplus.svg?branch=master)](https://travis-ci.org/nknapp/deep-aplus)
[![Coverage Status](https://img.shields.io/coveralls/nknapp/deep-aplus.svg)](https://coveralls.io/r/nknapp/deep-aplus)


> Resolve a whole structure of promises, library agnostic



This small library is a promise-library agnostic function that resolves a whole structure
or objects, arrays, promises and values to a single promise in which the whole structure is 
resolved.

Unlike other libraries like [q-deep](https://npmjs.com/package/q-deep), [resolve-deep](https://npmjs.com/package/resolve-deep) and 
[swear](https://npmjs.com/package/swear), this library is designed to work without dependencies to any promise library
(and also without any other dependencies).
Just pass the promise constructor (i.e. `Q.Promise` or `Promise`) as first argument.

**Note: There is no cycle check. You have to check for cycles yourself before passing the
  structure to the function**


# Installation

```
npm install deep-aplus
```

## Usage

The following example demonstrates how to use this module:

```js
var Q = require('q')
var deep = require('deep-aplus')(Q.Promise)

// Create a promise that returns a value (for demonstration purposes)
function P(value) {
  return Q.delay(1).then(function () {
    return value
  })
}

deep(2).then(console.log) // 2
  .then(() => deep(P(2)))
  .then(console.log) // 2

  .then(() => deep({a: 1, b: P(2)}))
  .then(console.log) // { a: 1, b: 2 }

  .then(() => deep({a: 1, b: [2, P(3)]}))
  .then(console.log) // { a: 1, b: [ 2, 3 ] }

  .then(() => deep({a: 1, b: {c: 2, d: P(3)}}))
  .then(console.log) // { a: 1, b: { c: 2, d: 3 } }

  // Nesting promises
  .then(() => deep({a: 1, b: P([2, P(3)])}))
  .then(console.log) // { a: 1, b: [ 2, 3 ] }

  .then(() => deep({a: 1, b: P([2, P(3)])}))
  .then(console.log) // { a: 1, b: [ 2, 3 ] }

  .then(() => deep({a: 1, b: P({c: 2, d: P(3)})}))
  .then(console.log) // { a: 1, b: { c: 2, d: 3 } }

  // does not dive into classes in order to preserve their functionality
  .then(() => {
    function A() {
      this.a = 2;
      this.b = P(3)
    }
    return deep(new A())
  })
  .then(console.log) // A { a: 2, b: { state: 'pending' } })
```


##  API-reference

<a name="module_index"></a>

### index ⇒ <code>function</code>
Creates a `deep(value)`-function using the provided constructor to
create the resulting promise and promises for intermediate steps.
The `deep` function returns a promise for the resolution of an arbitrary
structure passed as parameter

**Returns**: <code>function</code> - a function that returns a promise (of the provided class)
  for a whole object structure  
**Access:** public  

| Param | Type | Description |
| --- | --- | --- |
| Promise | <code>function</code> | class in which promises are created |




## License

`deep-aplus` is published under the MIT-license. 
See [LICENSE.md](LICENSE.md) for details.

## Release-Notes
 
For release notes, see [CHANGELOG.md](CHANGELOG.md)
 
## Contributing guidelines

See [CONTRIBUTING.md](CONTRIBUTING.md).