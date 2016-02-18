import test from 'ava';
import boom from './../lib/index.js';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// NOT typeof
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

test('detonates not.typeof', t => {
	t.throws(() => {
		boom().if('string').not.typeof('function');
	}, 'Expected a function');
});

test('detonates is.not.typeof', t => {
	t.throws(() => {
		boom().if('string').is.not.typeof('function');
	}, 'Expected a function');
});

test('detonates is.not.a', t => {
	t.throws(() => {
		boom().if('string').is.not.a('function');
	}, 'Expected a function');
});

test('silent when no assertion: not.typeof', t => {
	t.is(typeof boom().if('string').not.typeof('string'), 'undefined');
});

test('silent when no assertion: is.not.typeof', t => {
	t.is(typeof boom().if('string').is.not.typeof('string'), 'undefined');
});

test('silent when no assertion: is.not.a', t => {
	t.is(typeof boom().if('string').is.not.a('string'), 'undefined');
});

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// IS typeof
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

test('detonates typeof', t => {
	t.throws(() => {
		boom().if('string').typeof('string');
	}, 'Expected string not to be a string');
});

test('detonates is.typeof', t => {
	t.throws(() => {
		boom().if('string').is.typeof('string');
	}, 'Expected string not to be a string');
});

test('detonates is.a', t => {
	t.throws(() => {
		boom().if('string').is.a('string');
	}, 'Expected string not to be a string');
});

test('silent when no assertion: typeof', t => {
	t.is(typeof boom().if('string').typeof('function'), 'undefined');
});

test('silent when no assertion: is.typeof', t => {
	t.is(typeof boom().if('string').is.typeof('function'), 'undefined');
});

test('silent when no assertion: is.a', t => {
	t.is(typeof boom().if('string').is.a('function'), 'undefined');
});
