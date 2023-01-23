'use strict'

const chai = require('chai')

const expect = chai.expect

const lab = require('../lib/function-syntax-lab.js')

describe('function syntax lab', () => {
  describe('youRock', () => {
    it('generates phrase', () => {
      expect(lab.youRock('Alyssa')).to.equal('Alyssa Rocks!')
    })
  })

  describe('square', () => {
    it('multiples number by self', () => {
      expect(lab.square(2)).to.equal(4)
      expect(lab.square(-1)).to.equal(1)
      expect(lab.square(5)).to.equal(25)
    })
  })

  describe('cube', () => {
    it('multiplies number by self squared', () => {
      expect(lab.cube(2)).to.equal(8)
      expect(lab.cube(-1)).to.equal(-1)
      expect(lab.cube(5)).to.equal(125)
    })
  })

  describe('toTheFourth', () => {
    it('multiplies number by self cubed', () => {
      expect(lab.toTheFourth(2)).to.equal(16)
      expect(lab.toTheFourth(-1)).to.equal(1)
      expect(lab.toTheFourth(5)).to.equal(625)
    })
  })
})
