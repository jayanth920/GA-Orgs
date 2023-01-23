var fs = require('fs')
var solution = fs.readFileSync("solution.txt",'utf8')

describe("Solution",function(){
  it("has more than one line", function(){
    expect(solution.split("\n").length).toBeGreaterThan(1)
  })
  it("creates a directory House", function(){
    expect(solution.match(/mkdir House/)).toNotBe(null)
  })
  it("adds 2 files Dorothy and Toto to House", function(){
    var conditions = [
      'touch House/Dorothy',
      'touch House/Toto',
      'touch Dorothy',
      'touch Toto',
    ]
    var matches = conditions.filter(function(condition){
      return solution.match(new RegExp(condition,'igm'))
    })
    expect(matches.length).toEqual(2)
  })
  it("creates a directory oz", function(){
    expect(solution.match(/mkdir Oz/)).toNotBe(null)
  })
  it("adds 4 files for the witches to Oz", function(){
    var re = new RegExp('\\\\','gmi')
    expect(solution.match(re).length).toBeGreaterThan(15)
  })
  it("uses mv to move Dorothy from House", function(){
    expect(solution.match('mv').length).toBeGreaterThan(0)
  })
  it("uses rm to remove the Wicked Witch of the East", function(){
    expect(solution.match('rm').length).toBeGreaterThan(0)
  })
})