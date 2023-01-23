'use strict'

const chai = require('chai')
const expect = chai.expect

const ROT13Cipher = require('../lib/challenge')

describe('ROT13Cipher', function () {
  it('encodes a single word', function () {
    const message = 'rachelwuzheer'
    const encodedMessage = 'enpuryjhmurre'
    expect(ROT13Cipher.encode(message)).to.eql(encodedMessage)
  })

  it('encodes multiple words', function () {
    const message = 'rachel wuz heer'
    const encodedMessage = 'enpury jhm urre'
    expect(ROT13Cipher.encode(message)).to.eql(encodedMessage)
  })

  it('decodes a single word', function () {
    const encodedMessage = 'uryybjbeyq'
    const decodedMessage = 'helloworld'
    expect(ROT13Cipher.decode(encodedMessage)).to.eql(decodedMessage)
  })

  it('decodes multiple words', function () {
    const encodedMessage = 'enpury jhm urre'
    const decodedMessage = 'rachel wuz heer'
    expect(ROT13Cipher.decode(encodedMessage)).to.eql(decodedMessage)
  })
})

// 'abcdefghijklmnopqrstuvwxyz
// 'nopqrstuvwxyzabcdefghijklm'
