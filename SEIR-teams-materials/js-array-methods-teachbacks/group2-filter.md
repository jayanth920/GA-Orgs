# Group 2 - .filter()

-   filters elements from an array based on some custom condition
-   condition must return true or false
-   values that return true pass through and are stored in a new array

    Ex. 1: filtering array of numbers

    ```javascript
    const numbers = [15, 18, 3921, 327];
    let result = numbers.filter(placeholder => placeholder % 2 === 0);
    console.log(result);
    ```

    Ex. 2: filtering array of strings

    ```javascript
    const words = ['dog', 'cat', 'elephant', 'length', 'ruler', 'hand'];
    let resultTwo = words.filter(word => word.length <= 5);
    console.log(resultTwo);
    ```

    Ex. 3: filtering array of booleans (returned the evaluation but no indication of which index it belongs to, could probably add a for loop)

    ```javascript
    // Tried to filter an array of booleans, it returned the values but with no indication of which index the evaluation belongs to
    const arrBool = [2 == 2, 1 == 3, 9 == 4, 1 < 3, 4 > 10, 9 == 5];
    let resultBool = arrBool.filter(word => word == true);
    console.log(resultBool);
    ```

    Ex. 4: Why filter is useful - reducing a code block to one line

    ```javascript
    // create filtering function
    function greaterThan100(num) {
    	return num > 100;
    }
    // create new empty array
    // create for loop to iterate over numbers array and push passing items into new array
    const bigNums = [];
    for (let i = 0; i < numbers.length; i++) {
    	if (greaterThan100(numbers[i])) {
    		bigNums.push(numbers[i]);
    	}
    }
    console.log(bigNums);
    // complete the same task as above on one line using FILTER array method
    const bigNums = numbers.filter(greaterThan100);
    // can also use fat arrow method (anonymous function)
    const bigNums = numbers.filter(num => {
    	return num > 100;
    });
    ```
