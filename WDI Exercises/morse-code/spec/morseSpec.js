var morse = require("../morse")
describe("morse code", function(){
  it("encodes individual letters", function(){
    expect(morse.encode("a")).toEqual(".-")
  })
  it("encodes individual words", function(){
    expect(morse.encode("wait")).toEqual(".-- .- .. -")
  })
  it("handles uppercase letters", function(){
    expect(morse.encode("Roger")).toEqual(".-. --- --. . .-.")
  })
  it("encodes a whole sentence", function(){
    expect(morse.encode("The frequency is in use")).toEqual("- .... .   ..-. .-. . --.- ..- . -. -.-. -.--   .. ...   .. -.   ..- ... .")
  })
})