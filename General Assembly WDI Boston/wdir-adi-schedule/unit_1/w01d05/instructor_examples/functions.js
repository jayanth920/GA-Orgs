//////////////////////////////
// Scope
//////////////////////////////

const printBoo = () => {
  console.log('==========')
  console.log('Boo!')
  console.log('==========')
}

// printBoo();

const printSum = () => {
  console.log(10 + 10)
}

// printSum()


const printTriangle = () => {
  console.log('#')
  console.log('##')
  console.log('###')
  console.log('####')
  console.log('#####')
}

// printTriangle()

const checkInputLength = (input) => {
  if (input.length > 10 ) {
    console.log('input length is greater than 10')
  } else {
    console.log('input length is not greater than 10');
  }
}

// checkInputLength('check me')

const sayName = (name) => {
  console.log('Hello! My name is ' + name)
}

// sayName('Karolin' , 'Rafalski')
const calculateArea1 = (num1, num2) => {
  console.log(num1 * num2)
}

// calculateArea1(4, 4)


const minusOne = (num) => {
  console.log(num - 1)
}

// minusOne(5)

const makeSentence = (subject, verb, object) => {
  console.log('Oh boy, do ' + subject + ' ' + verb + ' ' + object + ' or what');
}


// makeSentence('I', 'want', 'chimichangas')



const getLastElement = (arr) => {
  console.log('original', arr);
  console.log(arr[arr.length - 1])
  console.log('after .length', arr);
  // console.log('original', arr);
  // console.log('popped element', arr.pop());
  // console.log('after pop', arr);
}

// getLastElement([1, 2, 3, 4, 5, 6]);       // 6
// getLastElement(['a', 'b', 'c']);          // 'c'
// getLastElement([[1, 2, 3], [4, 5, 6]]);   // [4, 5, 6]



// const ten = () => {
//   return 10
// }
//
//
// console.log(8 + ten())

const multiply = (num1, num2) => {
  return num1 * num2
}

// console.log(multiply (multiply(2, 3), multiply(9, 4)))



const example = (input) => {
  if( input === 'none') {
    return 0
  }
  return 1
}

// console.log(example('none'))
// console.log(example('two'))



//////////////////////////////
// Scope
//////////////////////////////

// global

// let num = 100

const exampleFunction = () => {
  let num = 4
  console.log(num * num)
}

// exampleFunction()
// console.log(num);

// for (let i = 0; i < 5; i++){
//   console.log(i);
// }



const exampleFunc = () => {
  console.log(item, 'within function');
}

// exampleFunc()

const setItem = () => {
  const item = 'spicy meatball'
  return item
}

const getItem = () => {
  return item
}

// console.log(getItem())

const returnName = (name) => {
  return name
}

const returnGreeting = (name) => {
  return "oh hai, " + returnName(name)
}

// console.log(returnGreeting('Charlie'))

// perfect squares
//
// 1, 4, 9, 16, 25, 36, 49, 64, 81, 100 ... should return true
// 4 = 2 * 2  Math.sqrt(2) = 2 % 1 === 0
// 9 = 3 * 3  Math.sqrt(9) = 3 % 1 === 0

const checkSquare = (num) => {
  return Math.sqrt(num) % 1 === 0
}

// console.log(checkSquare(4))
// console.log(checkSquare(5))

const checkToLimit = (limit) => {
  for (let i = 1; i <= limit; i++){
    let str = ''
    if (checkSquare(i)) {
      str = ' is '
    } else {
      str = ' is not '
    }
    console.log(i + str + 'a perfect square');
  }
}

// checkToLimit(10)


// {
//   let item = 'spicy meatball'
//   console.log(item);
// }


// for (var i = 0; i < 9; i++) {
//   console.log('Inside the block:', i)
// }
//
// console.log('Outside the block', i)

let num = 0

if (true) {
  num = 100
}

  // console.log(num)


const age = 21
let message = ''

if (age < 21){
  message = 'You cannot buy the beer'
} else {
  message = 'You can buy the beer'
}

// console.log(message);

const words = 'that\'s a ....'

{
  const start = 'mama mia!'
  {
    const item = 'spicy meatball'
    console.log(start)
    console.log(words)
    console.log(item)
  }
}

countdown = (num) => {
  if (num == 0){
    return
  }
  console.log(num);
  return countdown(num - 1)
}

countdown(10)






































































































































































































































// make space
