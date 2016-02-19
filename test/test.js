import test from 'ava';
import types from './../lib/types.js';

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
