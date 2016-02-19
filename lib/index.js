'use strict';
var types = require('./types.js');
var fn = require('./functions.js');

module.exports = Detonate;
module.exports.types = types;

function Detonate() {
	if (!(this instanceof Detonate)) {
		return new Detonate();
	}

	this.target = null;
	this.negate = false;
}

Detonate.prototype.if = function (target) {
	this.target = target;
	return this;
};

Detonate.prototype.typeof = Detonate.prototype.a = function (type) {
	var fun = this.negate ? fn.isType : fn.isNotType;
	fun(this.target, type);
};

Detonate.prototype.equal = Detonate.prototype.equals = function (equalTo) {
	var fun = this.negate ? fn.isEqual : fn.isNotEqual;
	fun(this.target, equalTo);
};

Object.defineProperty(Detonate.prototype, 'not', {
	get: function not() {
		this.negate = !this.negate;
		return this;
	}
});

function addLink(name) {
	Object.defineProperty(Detonate.prototype, name, {
		get: function () {
			return this;
		}
	});
}

['is', 'does'].forEach(addLink);

