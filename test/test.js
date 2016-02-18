import test from 'ava';
import boom from './../lib/index.js';

test('types', t => {
	t.is(boom.types.string, 'string');
	t.is(boom.types.function, 'function');
	t.is(boom.types.object, 'object');
	t.is(boom.types.boolean, 'boolean');
	t.is(boom.types.array, 'array');
	t.is(boom.types.date, 'date');
	t.is(boom.types.number, 'number');
	t.is(boom.types.regex, 'regex');
	t.is(boom.types.null, 'null');
	t.is(boom.types.undefined, 'undefined');
	t.is(boom.types.symbol, 'symbol');
	t.is(boom.types.promise, 'promise');
});
