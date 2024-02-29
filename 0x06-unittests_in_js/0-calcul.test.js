const { describe, it } = require('mocha');
const calculateNumber = require('./0-calcul');
const assert = require('assert');

describe('calculateNumber', () => {
	it('should return 4', () => {
		assert.equal(calculateNumber(1, 3), 4);
	});
	it('should return 5', () => {
		assert.strictEqual(calculateNumber(1, 3.7), 5);
	});
	it('should return 5', () => {
		assert.strictEqual(calculateNumber(1.2, 3.7), 5);
	});
	it('should return 6', () => {
		assert.strictEqual(calculateNumber(1.5, 3.5), 6);
	});
	it('should return 5', () => {
		assert.strictEqual(calculateNumber(1.4, 3.5), 5);
	});
	it('should return 6', () => {
		assert.strictEqual(calculateNumber(1.6, 3.5), 6);
	});
});
