# detonate

> Go boom! with a clean, compact syntax for your javascript type checking.

[![Build Status](https://travis-ci.org/radiovisual/detonate.svg?branch=master)](https://travis-ci.org/radiovisual/detonate) [![Coverage Status](https://coveralls.io/repos/github/radiovisual/detonate/badge.svg?branch=master)](https://coveralls.io/github/radiovisual/detonate?branch=master)
 
:boom: **Note:** This is currently in the beginning/experimental phases. Currently there is only support for equality and type checking. Please [report any issues](https://github.com/radiovisual/detonate/issues) and use with caution. Pull requests welcome.

## Install

```
$ npm install --save detonate
```


## Usage

```js
const boom = require('detonate');

boom().if('foo').not.typeof('function');
//=> TypeError: Expected a function
```

## Why?

`detonate` saves you time and makes your programs more compact by taking these common checks:

```js
if (typeof str !== 'string') {
    throw new TypeError('Expected a string');
}
```

and converting them to this:

```js
boom().if(str).not.typeof('string');
```

Both blocks of code do the exact same thing (they throw the exact same error, if applicable), but detonate does the same with less code, and better readability.


## API

### detonate().if(target)

#### target

Type: `string|number|object|function`

This is the item you want to evaluate for type, equality, etc.

#### chaining

You can chain new items onto the `if()` function, such as:

##### .not

`.not` negates the current operation

These two statements are opposite:

```js
boom().if('string').typeof('function');
boom().if('string').not.typeof('function');
```

##### .typeof(type)

`.typeof` will check the value of `typeof <type>`

```js
boom().if('string').is.not.typeof('function');
```

##### .equal(value)

`.equal` will check the equality of `<value>`

```js
boom().if('foo').is.equal('bar');
```

##### .equals(value)

`.equals` in an alias of `.equal()`

##### .a(type)

`.a()` is an alias of `.typeof()`

These statements are equivalent:

```js
boom().if('string').is.not.a('function');
boom().if('string').is.not.typeof('function');
```

#### Readability Enhancers

The only purpose of `.is` and `.does` is to enhance the readability of your statements.

For example, these statements are equivalent:

```js
boom().if('foo').does.not.equal('bar');
boom().if('foo').is.not.equal('bar');
boom().if('foo').not.equal('bar');
```

## License

MIT © [Michael Wuergler](http://numetriclabs.com)
