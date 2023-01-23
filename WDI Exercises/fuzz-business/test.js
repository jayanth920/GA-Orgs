function shouldEqual(fnReturn, arg, expected){
  let passed = fnReturn === expected;
  let returnieSanders = ``;
  if (passed) {
    returnieSanders += `Passed! (sumFizzBuzzFactors(${arg}) returned ${fnReturn})`
  } else {
    returnieSanders += `Expected sumFizzBuzzFactors(${arg}) to return ${expected}, but ${fnReturn} was returned instead`;
  }
  return returnieSanders;
}
