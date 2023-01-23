/*
 * You task is to make it so that when a user clicks on any of the 100 buttons
 * on the page, an alert pops up that says "You clicked a button!".
 *
 * BONUS: Can you make it so that when the user clicks on a button, the alert
 * tells them the number button they clicked on? (i.e. "You clicked button
 * number 74")
 *
 * Your solution here:
 */
const buttons = document.querySelectorAll('.js-button')
// console.log(buttons)


// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', (event) => {
//         event.preventDefault()
//         console.log(`You clicked a button ${i + 1}`)
//     })
// }

// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', (event) => {

//         // event.stopPropagation() prevents default bubbling
//         // and prevents other event listeners on parent tags
//         // from firing.
//         event.stopPropagation()
//         console.log('You clicked a button')
//     })
// }


// For loop to add a dataset attribute to each button
for (let i = 0; i < buttons.length; i++) {
    buttons[i].setAttribute('data-number', i + 1)
}



const div = document.querySelector('div')
// console.log(div)

div.addEventListener('click', (event) => {
    event.preventDefault()
    // console.log(event.target)

    // console.log(event.target.tagName)
    if(event.target.tagName === 'A'){
        console.log(`You clicked on box number ${event.target.dataset.number}`)
    }
})