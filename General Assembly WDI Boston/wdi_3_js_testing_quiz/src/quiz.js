// Quiz: Testing with Jasmine

// Question 1.  In your own words, define the following:
// (Write them in comments so that the rest of the code will still run)
//
// assertion
//
// black-box testing

// Question 2.
//
// In the quiz.spec.js file, there is a test case with an
// assertion that does not match the comments. Rewrite the
// assertion so that it does what the comments say.

// Question 3. Given the following code:

function countOdds (numbers) {
    var i;
    var count = 0;
    for (i = 0; i < count.length; i++) {
        if (numbers[i] %2 === 1) {
            count++;
        }
    }
}

// Write two black-box tests for this code. (Remember, tests
// go in the .spec.js file.)

// Question 4. Consider the decision points and code paths
// in countOdds. If you have covered them all with your
// answer to question 3, write a comment in the .spec.js
// file indicating this. Otherwise, write a third test that
// improves the code test coverage.
