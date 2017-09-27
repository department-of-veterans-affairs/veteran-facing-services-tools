# Fang

A tiny utility to get language information about a file.

Simply checks the file extension against Github's list of known languages. If you need something more robust (but likely slower) then other solutions are available :-)

## Installation

```shell
$ npm install @allmarkedup/fang --save
```

## Usage

The `fang` module exports a single function with the following signature:

```js
fang(<path-to-file>);
```

And returns and object with known information about the language, or `undefined` if not recognised). For example:

```js
const fang = require('@allmarkedup/fang');

console.dir(fang('assets/styles/main.scss'));

// Outputs:
// {
//     "name":  "SCSS",        // Language name
//     "mode":  "scss",        // ACE editor mode
//     "scope": "source.scss", // TextMate/Sublime scope
//     "color": "#CF649A"      // Github UI color
// }
```

# Credits

All language information is taken from [Github's Linguist](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml) gem.
