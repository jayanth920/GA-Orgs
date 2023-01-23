console.log('connected to my calculator');

$(() => {

  // setting the default variables
  let nums = [];
  let previousNum = null;
  let operator = null;

  // event handler for clicking on a number button
  $('.num').on('click', () => {
    // push the current target number into the nums array
    nums.push($(event.currentTarget).html())
    // display it on the output
    // need to use .join('') to join the array numbers into one number
    $('#output').text(nums.join(''))
  })

  // event handler for clicking on an operator
  $('.action').on('click', () => {
    // set the operator variable into the operator the user clicked on
    operator = $(event.currentTarget).text();
    // since we clicked on an operator, that means we want to move on to the second number
    // set previousNum into the num array to save the first number
    previousNum = nums
    // clear the nums array so we can start getting the second number
    nums = []
    // display a '0' in the output to clear out their previous number
    $('#output').text('0')
  })

  // event handler for clicking on the equals sign
  $('#equals').on('click', () => {
    // get the first num by joining the previousNum variable
    let firstNum = previousNum.join('');
    // get the second num by joining the secondNum variable
    let secondNum = nums.join('');
    // set the expression
    let finalString = firstNum + operator + secondNum;
    // use eval to evaluate the expression and then display the answer
    $('#output').text(eval(finalString));

    // ALTERNATIVE USE WITHOUT EVAL -- if/else statements!:
    // for example, check if the operator is an addition sign, add the numbers
    // note that firstNum and secondNum are STRINGS, so you need to convert them into numbers by using the javascript method parseInt

    // if(operator === '+') {
    //   let sum = parseInt(firstNum) + parseInt(secondNum);
    //   $('#output').text(sum);
    // }

    // then do the else-if statements for all the other operators!
  })

  // event handler for clicking on clear button
  $('#clear').on('click', () => {
    // just reset everything!
    $('#output').text('0');
    nums = [];
    previousNum = null;
    operator = null;
  })

})
