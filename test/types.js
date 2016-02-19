import test from 'ava';
import types from './../lib/types.js';
import yell from './../lib/index.js';
import version from 'node-ver';

const symbols = version().major >= 4;

const und = undefined;
const str = 'string';
const obj = {};
const boo = true;
const num = 42;
const sym = symbols ? Symbol('foo') : null;

test('types', t => {
	t.is(types.string, 'string');
	t.is(types.function, 'function');
	t.is(types.object, 'object');
	t.is(types.boolean, 'boolean');
	t.is(types.array, 'array');
	t.is(types.date, 'date');
	t.is(types.number, 'number');
	t.is(types.regex, 'regex');
	t.is(types.null, 'null');
	t.is(types.undefined, 'undefined');
	t.is(types.symbol, 'symbol');
	t.is(types.promise, 'promise');
});

test('allows custom name', t => {
	t.is(typeof yell.if().is.a, 'function');
});

test('silent on valid strings', t => {
	t.is(typeof yell.if(str).is.not.a('string'), 'undefined');
});

test('detonates on invalid strings', t => {
	t.throws(() => {
		yell.if(boo).is.not.a('string');
	}, 'Expected a string');
});

test('silent on valid undefined', t => {
	t.is(typeof yell.if(und).is.not.a('undefined'), 'undefined');
});

test('detonates on invalid undefined', t => {
	t.throws(() => {
		yell.if(boo).is.not.typeof('undefined');
	}, 'Expected a undefined');
});

test('silent on valid objects', t => {
	t.is(typeof yell.if(obj).is.not.a('object'), 'undefined');
});

test('detonates on invalid objects', t => {
	t.throws(() => {
		yell.if(boo).is.not.typeof('object');
	}, 'Expected a object');
});

test('silent on valid numbers', t => {
	t.is(typeof yell.if(num).is.not.a('number'), 'undefined');
});

test('detonates on invalid numbers', t => {
	t.throws(() => {
		yell.if(boo).is.not.typeof('number');
	}, 'Expected a number');
});

if (symbols) {
	test('silent on valid symbols', t => {
		t.is(typeof yell.if(sym).is.not.a('symbol'), 'undefined');
	});

	test('detonates on invalid symbols', t => {
		t.throws(() => {
			yell.if(str).is.not.a('symbol');
		}, 'Expected a symbol');
	});
}

