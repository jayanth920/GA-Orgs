let answer

if (answer === undefined) {
  console.log('You have to guess a name when you run the script!')
} else if (answer === 'Brian') {
  console.log(`How did you know my name was ${answer}?!`)
} else {
  console.log(`Sorry, ${answer} is not my name but it sure is a good one.`)
}
