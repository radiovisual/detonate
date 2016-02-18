'use strict';

module.exports.isType = function (item, type) {
	if (typeof item !== type) {
		throw new Error('Expected a ' + type);
	}
};

module.exports.isNotType = function (item, type) {
	if (typeof item === type) {
		throw new Error('Expected ' + item + ' not to be a ' + type);
	}
};

module.exports.isEqual = function (a, b) {
	if (a !== b) {
		throw new Error('Expected ' + a + ' to equal ' + b);
	}
};

module.exports.isNotEqual = function (a, b) {
	if (a === b) {
		throw new Error('Expected ' + a + ' not to be equal to ' + b);
	}
};

