var should = require('chai').should();
var expect = require('chai').expect;
var fs = require('fs');
var objs = fs.readFileSync('objects.js', 'utf8');

describe('OBJECTS PROMPT #1', function () {
	try {
		eval(objs);
	} catch (e) {
		console.log(e);
	}
	it('Returns a string that equals "Arcadia"', function () {
		expect(arcadia).to.be.a('string');
		expect(arcadia).to.equal('Arcadia');
	});
});

describe('OBJECTS PROMPT #2', function () {
	try {
		eval(objs);
	} catch (e) {
		console.log(e);
	}
	it('Returns a string that equals "Spooky"', function () {
		expect(spooky).to.be.a('string');
		expect(spooky).to.equal('Spooky');
	});
});

describe('OBJECTS PROMPT #3', function () {
	try {
		eval(objs);
	} catch (e) {
		console.log(e);
	}
	it('Returns a string that equals "Walter S. Skinner"', function () {
		expect(skinner).to.be.a('string');
		expect(skinner).to.equal('Walter S. Skinner');
	});
});

describe('OBJECTS PROMPT #4', function () {
	try {
		eval(objs);
	} catch (e) {
		console.log(e);
	}
	it('Returns a string that equals "Margaret Scully"', function () {
		expect(margaret).to.be.a('string');
		expect(margaret).to.equal('Margaret Scully');
	});
});

describe('OBJECTS PROMPT #5', function () {
	try {
		eval(objs);
	} catch (e) {
		console.log(e);
	}
	it('Returns an array of length six"', function () {
		expect(portrayedBy).to.be.a('array');
		expect(portrayedBy.length).to.equal(6);
	});

	it('Contains the correct values', function () {
		expect(portrayedBy).to.deep.equal([
			'Fox William Mulder is portrayed by David Duchovny',
			'Dana Katherine Scully is portrayed by Gillian Anderson',
			'Walter S. Skinner is portrayed by Mitch Pileggi',
			'Carl Gerhard Busch is portrayed by William B. Davis',
			'Monica Reyes is portrayed by Annabeth Gish',
			'John Doggett is portrayed by Robert Patrick',
		]);
	});
});

describe('OBJECTS PROMPT #6', function () {
	try {
		eval(objs);
	} catch (e) {
		console.log(e);
	}
	it('Returns a boolean that equals true', function () {
		expect(stillAlive).to.be.a('boolean');
		expect(stillAlive).to.equal(true);
	});
});

describe('OBJECTS PROMPT #7', function () {
	try {
		eval(objs);
	} catch (e) {
		console.log(e);
	}
	it('Returns an array with the correct length', function () {
		expect(believers).to.be.a('array');
		expect(believers.length).to.equal(2);
	});

	it('Contains the correct values', function () {
		expect(believers).to.deep.equal(['Fox William Mulder', 'Monica Reyes']);
	});
});
