'use strict';
var types = require('./types.js');
var fn = require('./functions.js');

module.exports = detonate;
module.exports.types = types;

function detonate() {
	this.target = null;
	this.negate = false;
}

Object.defineProperty(Object.prototype, 'detonate', {
	set: function () {},
	get: function () {
		return detonate(this);
	},
	configurable: true
});

detonate.prototype.if = function (target) {
	this.target = target;
	return this;
};

detonate.prototype.typeof = detonate.prototype.a = function (type) {
	var fun = this.negate ? fn.isType : fn.isNotType;
	fun(this.target, type);
};

detonate.prototype.equal = detonate.prototype.equals = function (equalTo) {
	var fun = this.negate ? fn.isEqual : fn.isNotEqual;
	fun(this.target, equalTo);
};

Object.defineProperty(detonate.prototype, 'not', {
	get: function not() {
		this.negate = !this.negate;
		return this;
	}
});

function addLink(name) {
	Object.defineProperty(detonate.prototype, name, {
		get: function () {
			return this;
		}
	});
}

['is', 'does'].forEach(addLink);
