var solution = require("../ubbi_dubbi")
var translate = solution.translate
describe("solution", function () {
  describe("the method translate", function () {
    it("adds ub if the first letter is a vowel", function () {
      expect(translate("apt")).toBe("ubapt")
    })
    it("adds ub before the first vowel", function () {
      expect(translate("spot")).toBe("spubot")
    })
    it("adds ub before, only if the last letter vowel is preceded by two consonant", function () {
      expect(translate("scale")).toBe("scubale")
    })
  })
})
