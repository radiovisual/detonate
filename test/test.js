import test from 'ava';
import fn from './../lib/index.js';

test('allows custom name', t => {
	t.is(typeof fn.if().is.a, 'function');
});
