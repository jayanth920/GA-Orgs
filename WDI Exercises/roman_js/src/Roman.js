function romanize(arabic_numeral){
  var matches = {
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX",
    10: "X"
  };
  var roman_numeral = matches[arabic_numeral];
  return roman_numeral;
}
