// console.log('oh hai!');
// alert('hello world');
// const yourAnswer = prompt('Some question?', 'A default value');
// console.log(yourAnswer);

// const yourAnswer = prompt('Do you like apples?', 'Yes/No');
//
// if(yourAnswer == 'Yes'){
//     console.log('Excellent!');
// } else if (yourAnswer == 'No'){
//     console.log('What?!?!?! How can you not like apples?!?!?!');
// } else {
//     console.log('Does not compute');
// }

// const greet = () => {
//     alert('Hi!');
// }
//
// const sayBye = () => {
//     alert('Bye!');
// }
//
// const answer = prompt('Are you arriving or leaving?', 'Arriving/Leaving');
//
// if(answer == 'Arriving'){
//     greet();
// } else if (answer == "Leaving"){
//     sayBye();
// }

// let action = null;
//
// while(action != 'Stop'){
//     action = prompt('What do you want to do?', 'Your Action');
// }

// const func1 = ()=>{
//     console.log(1);
//     func2(); //why can I call this now, even though the definition is below?
//     func3();
//     console.log('Finished!');
// }
// const func2 = ()=>{
//     console.log(2);
//     func4();
//     func6();
// }
// const func3 = ()=>{
//     console.log(3);
//     func5();
// }
// const func4 = ()=>{
//     console.log(4);
// }
// const func5 = ()=>{
//     console.log(5);
// }
// const func6 = ()=>{
//     console.log(6);
// }
// func1();

let apples;
let money;

const start = () => {
    apples = 0;
    money = 20;
    askForAction();
}

const showStatus = () => {
    alert("You have " + apples + " apples and $" + money);
}

const askForAction = () => {
    showStatus();
    const choice = prompt('What do you want to do?', 'buy apple / eat apple / restart');
    if(choice == 'buy apple'){
        buyApple();
    } else if (choice == 'eat apple'){
        eatApple();
    } else if (choice == 'restart'){
        start();
    }
}

const buyApple = () => {
    apples++;
    money--;
    askForAction();
}

const eatApple = () => {
    apples--;
    askForAction();
}

start();
