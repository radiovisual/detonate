'use strict';
var fn = require('./functions.js');

module.exports = (function() {

	function Detonate(target) {
		this.target = arguments.length ? target : "";
		this.negate = false;
	}

	Detonate.prototype.if = function (target) {
		return new Detonate(target);
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

	return new Detonate();
}());




