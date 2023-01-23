'use strict'

// Allow chai syntax like `expect(foo).to.be.ok;`
// jshint -W030

const chai = require('chai')
const expect = chai.expect

const jsFunctions = require('../lib/js-functions.js')
const jsRefernceTypes = require('../lib/js-reference-types.js')

describe('(js-functions.js) Q1: Full name', () => {
    it('Takes in a first name and last name and returns the full name', () => {
        const result = jsFunctions.fullName('Beth', 'Parnell')
        expect(result).to.equal('Beth Parnell')
    })
})

describe('(js-functions.js) Q2: Greater than', () => {
    it('Returns false if number is not greater than 5', () => {
        const result = jsFunctions.greaterThan(3)
        expect(result).to.equal(false)
    })
    it('Returns true if number is greater than 5', () => {
        const result = jsFunctions.greaterThan(6)
        expect(result).to.equal(true)
    })
})

describe('(js-functions.js) Q3: Summation', () => {
    it('Takes in a single element array and returns the sum of the single number', () => {
        const result = jsFunctions.sum([42])
        expect(result).to.equal(42)
    })
    it('Takes in a multiple element array and returns the sum of all the numbers', () => {
        const result = jsFunctions.sum([-1, -2, -3, -4, -5])
        expect(result).to.equal(-15)
    })
})

describe('(js-functions.js) Q4: Minimum', () => {
    it('Returns the minimum element in an array', () => {
        const result = jsFunctions.min([-3, -2, -1, -5, -4])
        expect(result).to.equal(-5)
    })
})

describe('(js-functions.js) Q5: String remover', () => {
    it('Correctly removes a single matching string', () => {
        const arr = ['Earth', 'Water', 'Air', 'Fire']
        const expectedResult = ['Earth', 'Water', 'Fire']

        expect(jsFunctions.stringRemover(arr, 'Air')).to.deep.equal(expectedResult)
    })

    it('Correctly removes multiple instances of a matching string', () => {
        const arr = ['coffee', 'beer', 'tea', 'water', 'soda', 'water']
        const expectedResult = ['coffee', 'beer', 'tea', 'soda']

        expect(jsFunctions.stringRemover(arr, 'water')).to.deep.equal(
            expectedResult
        )
    })
})

describe('(js-reference-types.js) Question 1:', () => {
    describe('developer', () => {
        it('is an object', () => {
            expect(jsRefernceTypes.developer).to.be.an('object')
        })
        it('has keys `skills` and `name`', () => {
            expect(jsRefernceTypes.developer).to.have.keys('skills', 'name')
        })
        it('value of key `skills` is an array of strings', () => {
            expect(jsRefernceTypes.developer.skills).to.be.an('array')
            jsRefernceTypes.developer.skills.forEach((skill) => {
                expect(skill).to.be.a('string')
            })
        })
        it('value of key `name` is a string', () => {
            expect(jsRefernceTypes.developer.name).to.be.a('string')
        })
    })
})

describe('(js-reference-types.js) Question 2:', () => {
    describe('addAndMultiply', () => {
        it('is a function', () => {
            expect(jsRefernceTypes.addAndMultiply).to.be.a('function')
        })
        it('returns a number when given the proper arguments', () => {
            expect(jsRefernceTypes.addAndMultiply(1, 2, 3)).to.be.a('number')
        })
        it('returns the correct number', () => {
            expect(jsRefernceTypes.addAndMultiply(1, 2, 3)).to.eq(9)
            expect(jsRefernceTypes.addAndMultiply(12, 40, 2)).to.eq(104)
            expect(jsRefernceTypes.addAndMultiply(-7.9, 23, 4)).to.eq(60.4)
        })
    })
})

describe('(js-reference-types.js) Question 3:', () => {
    describe('firstAndLast', () => {
        it('is an array', () => {
            expect(jsRefernceTypes.firstAndLast).to.be.an('array')
        })
        it('contains two numbers', () => {
            expect(jsRefernceTypes.firstAndLast.length).to.eq(2)
            expect(jsRefernceTypes.firstAndLast[0]).to.be.a('number')
            expect(jsRefernceTypes.firstAndLast[1]).to.be.a('number')
        })
        it('the first number is correct', () => {
            expect(jsRefernceTypes.firstAndLast[0]).to.eq(
                jsRefernceTypes.randomNums[0]
            )
        })
        it('the second number is correct', () => {
            expect(jsRefernceTypes.firstAndLast[1]).to.eq(
                jsRefernceTypes.randomNums[3]
            )
        })
    })

    describe('randomNums', () => {
        it('has not been modified', () => {
            expect(jsRefernceTypes.randomNums.length).to.eq(4)
            jsRefernceTypes.randomNums.forEach((num) => {
                expect(num).to.be.a('number')
                expect(num).to.be.above(0)
                expect(num).to.be.below(1)
            })
        })
    })
})

describe('(js-reference-types.js) Question 4:', () => {
    describe('excite', () => {
        it('is a function', () => {
            expect(jsRefernceTypes.excite).to.be.a('function')
        })
        it('returns an array', () => {
            expect(jsRefernceTypes.excite(['foo', 'bar'])).to.be.an('array')
        })
        it('appends an exclamation mark to each string', () => {
            expect(jsRefernceTypes.excite(['foo', 'bar'])).to.eql(['foo!', 'bar!'])
            expect(jsRefernceTypes.excite(['a', 'b', 'c', 'd'])).to.eql([
                'a!',
                'b!',
                'c!',
                'd!'
            ])
        })
    })
})

describe('(js-reference-types.js) Question 5:', () => {
    describe('negativeNums', () => {
        it('is a function', () => {
            expect(jsRefernceTypes.negativeNums).to.be.a('function')
        })
        it('returns an array', () => {
            expect(jsRefernceTypes.negativeNums([1, 2])).to.be.an('array')
        })
        it('returns an array containing negative versions of the original numbers', () => {
            expect(jsRefernceTypes.negativeNums([1, 2])).to.eql([-1, -2])
            expect(jsRefernceTypes.negativeNums([20, 400, 123.27])).to.eql([
                -20, -400, -123.27
            ])
            expect(jsRefernceTypes.negativeNums([0, Infinity])).to.eql([
                -0,
                -Infinity
            ])
        })
        it('doesn\'nt modify the original array that is passed in', () => {
            const arr = [1, 2, 3]
            jsRefernceTypes.negativeNums(arr)

            expect(arr).to.eql([1, 2, 3])
        })
    })
})
