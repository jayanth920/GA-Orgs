'use strict'

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

const Assertion = chai.Assertion
const expect = chai.expect

const diagnostic = require('../lib/js-basics')

describe('Question One:', function () {
    it('1a: Primitive Data Type', function () {
        diagnostic.primitiveThree.toLowerCase()
        expect(diagnostic.primitiveOne.toLowerCase()).to.equal('string')
    })
    it('1b: Primitive Data Type', function () {
        diagnostic.primitiveThree.toLowerCase()
        expect(diagnostic.primitiveTwo.toLowerCase()).to.equal('number')
    })
    it('1c: Primitive Data Type', function () {
        diagnostic.primitiveThree.toLowerCase()
        expect(diagnostic.primitiveThree.toLowerCase()).to.equal('undefined')
    })
    it('1d: Primitive Data Type', function () {
        diagnostic.primitiveThree.toLowerCase()
        expect(diagnostic.primitiveFour.toLowerCase()).to.equal('boolean')
    })
    it('1e: Primitive Data Type', function () {
        diagnostic.primitiveThree.toLowerCase()
        expect(diagnostic.primitiveFive.toLowerCase()).to.equal('null')
    })
})

describe('Question Two:', function () {
    it('2a: New value of \'c\'', function () {
        const q2 = new Assertion(diagnostic.valueOfC)
        q2.assert(q2._obj === 12, 'expected final value of c')
    })
    it('2b: Returns names of operators', function () {
        const operators = {
            first: diagnostic.firstOperator.toLowerCase(),
            second: diagnostic.secondOperator.toLowerCase()
        }
        const q2 = new Assertion(operators)

        q2.assert(q2._obj.first === 'assignment', 'expected first operator')
        q2.assert(q2._obj.second === 'addition', 'expected second operator')
    })
})

describe('Question Three:', function () {
    it('3a: First value of \'x\' and \'y\'', function () {
        expect(diagnostic.firstValOfX).to.equal(4)
        expect(diagnostic.firstValOfY).to.equal(3)
    })
    it('3b: Second value of \'x\' and \'y\'', function () {
        expect(diagnostic.secondValOfX).to.equal(5)
        expect(diagnostic.secondValOfY).to.equal(3)
    })
    it('3c: Final value of \'x\' and \'y\'', function () {
        expect(diagnostic.finalValOfX).to.equal(5)
        expect(diagnostic.finalValOfY).to.equal(15)
    })
})

describe('Question Four:', function () {
    it('The value of initWeather', function () {
        expect(diagnostic.initWeather).to.equal(undefined)
    })
    it('The value of cloudyWeather', function () {
        expect(diagnostic.cloudyWeather).to.equal('cloudy')
    })
    it('The value of sunnyWeather', function () {
        expect(diagnostic.sunnyWeather).to.equal('sunny')
    })
    it('The value of weatherLog', function () {
        expect(diagnostic.weatherLog).to.equal(true)
    })
})