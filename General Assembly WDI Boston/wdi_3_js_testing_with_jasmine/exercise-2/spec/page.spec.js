describe("countWordMatches", function(){

  it("should return 0 when the word is not matched", function(){
    expect(countWordMatches("word", "not in string")).toBe(0);
  });

  it("should return 1 when the word appears once", function(){
    var testString = "the last thing you expect to find";
    expect(countWordMatches("find", testString)).toBe(1);
  });

  it("should return the number of times the word appears", function(){
    var testString = "news news news";
    expect(countWordMatches("news", testString)).toBe(3);
  });

});
