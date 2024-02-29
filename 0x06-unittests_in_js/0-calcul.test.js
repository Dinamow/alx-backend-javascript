const { describe } = require('mocha');
const calculateNumber = require('./0-calcul');
const assert = require('assert');

describe('#calculateNumber', () => {
	describe('add', () => {
		it('should return 4', () => {
			assert.strictEqual(calculateNumber(1, 3), 4);
		});
		it('should return 5', () => {
			assert.strictEqual(calculateNumber(1.5, 3.5), 5);
		});
		it('should return 5', () => {
			assert.strictEqual(calculateNumber(1.4, 3.5), 5);
		});
		it('should return 6', () => {
			assert.strictEqual(calculateNumber(1.6, 3.5), 6);
		});
	});
});