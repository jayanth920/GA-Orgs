module.exports = function(phrase){
  if(phrase === undefined)
    throw new Error ('Invalid Argument!');

  return phrase.trim().length > 0 && phrase.split('').reverse().join('') === phrase;
};
