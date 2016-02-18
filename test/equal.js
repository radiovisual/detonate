import test from 'ava';
import boom from './../lib/index.js';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// NOT equal
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

test('detonates not.equal', t => {
	t.throws(() => {
		boom().if('string').not.equal('hi');
	}, 'Expected string to equal hi');
});

test('detonates not.equals', t => {
	t.throws(() => {
		boom().if('string').not.equals('hi');
	}, 'Expected string to equal hi');
});

test('detonates is.not.equal', t => {
	t.throws(() => {
		boom().if('string').is.not.equal('hi');
	}, 'Expected string to equal hi');
});

test('detonates is.not.equals', t => {
	t.throws(() => {
		boom().if('string').is.not.equals('hi');
	}, 'Expected string to equal hi');
});

test('silent when no assertion: not.equal', t => {
	t.is(typeof boom().if('string').not.equal('string'), 'undefined');
});

test('silent when no assertion: not.equals', t => {
	t.is(typeof boom().if('string').not.equals('string'), 'undefined');
});

test('silent when no assertion: is.not.equal', t => {
	t.is(typeof boom().if('string').is.not.equal('string'), 'undefined');
});

test('silent when no assertion: is.not.equals', t => {
	t.is(typeof boom().if('string').is.not.equals('string'), 'undefined');
});

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// IS equal
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

test('detonates equal', t => {
	t.throws(() => {
		boom().if('hi').equal('hi');
	}, 'Expected hi not to be equal to hi');
});

test('detonates equals', t => {
	t.throws(() => {
		boom().if('hi').equals('hi');
	}, 'Expected hi not to be equal to hi');
});

test('detonates is.equal', t => {
	t.throws(() => {
		boom().if('hi').is.equal('hi');
	}, 'Expected hi not to be equal to hi');
});

test('detonates is.equals', t => {
	t.throws(() => {
		boom().if('hi').is.equals('hi');
	}, 'Expected hi not to be equal to hi');
});

test('silent when no assertion: equal', t => {
	t.is(typeof boom().if('string').equal('hi'), 'undefined');
});

test('silent when no assertion: equals', t => {
	t.is(typeof boom().if('string').equals('hi'), 'undefined');
});

test('silent when no assertion: is.equal', t => {
	t.is(typeof boom().if('string').is.equal('hi'), 'undefined');
});

test('silent when no assertion: is.equals', t => {
	t.is(typeof boom().if('string').is.equals('hi'), 'undefined');
});
