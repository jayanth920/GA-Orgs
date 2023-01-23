console.log('hello from the console!');

let yourAnswer = ''

while (yourAnswer !== 'Yes') {
  yourAnswer = prompt('Do you like apples', 'Yes/No')
  if (yourAnswer === 'Yes'){
    alert('Excellent')
  } else if (yourAnswer === 'No') {
    alert('What?!?!?! How can you not like apples?!?!')
  } else {
    alert('Does not compute')
  }
}

// all input is a string
// console.log(typeof yourAnswer)
// if (yourAnswer == 12) {
//   console.log('yes 12');
// }
