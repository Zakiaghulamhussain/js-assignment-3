///Practice exercise 6.1
////Question#1

function addNumbers(a, b) {
    return a + b;
}

////Question#2
// let firstVariable = 10;
// let secondVariable = 5.5;


////Question#3
// function addNumbers(a, b) {
//     return a + b;
// }

// let firstVariable = 10;
// let secondVariable = 5.5;

// let result = addNumbers(firstVariable, secondVariable);
// console.log("The result of adding", firstVariable, "and", secondVariable, "is:", result);

////Question#4
function addNumbers(a, b) {
    return a + b;
}

let firstVariable = 10;
let secondVariable = 5.5;

// First call to addNumbers function
let result1 = addNumbers(firstVariable, secondVariable);
console.log("The result of adding", firstVariable, "and", secondVariable, "is:", result1);

// Second call to addNumbers function with different numbers
// let num1 = 7;
// let num2 = 3.5;

let result2 = addNumbers(num1, num2);
console.log("The result of adding", num1, "and", num2, "is:", result2);


////Practice exercise 6.2
////Question#1
let descriptiveWords = ["cat", "dog", "rabbit", "tiger", "eagle"];

////Question#2
// function getNameFromUser() {
//     let userName = prompt("Please enter your name:");
//     return userName;

////Question#3
// let friends = ["sara", "zara", "madiha", "zakia", "areeba"];
// function getRandomWord() {
//     let randomIndex = Math.floor(Math.random() * friends.length);
//     return friends[randomIndex];
// }
// let randomWord = getRandomWord();
// console.log("Randomly selected word:", randomWord);

////Question#4
// let friends = ["Alice", "Bob", "Charlie", "David", "Emily"];
// function getNameFromUser() {
//     let userName = prompt("Please enter your name:");
//     return userName;
// }

// function getRandomFriend() {
//     let randomIndex = Math.floor(Math.random() * friends.length);
//     return friends[randomIndex];
// }

// let user = getNameFromUser();

// let randomFriend = getRandomFriend();
// console.log("Hello, " + user + "! You entered your name.");
// console.log("Randomly selected friend from array:", randomFriend);


///Practice exercise 6.3
////Question#1
let number1 = 10;
let number2 = 5.5;


// /Question#2
// let operator = '+';
// let num1 = 10;
// let num2 = 5;

// if (operator === '+') {
//     console.log(num1 + num2); 
// } else if (operator === '-') {
//     console.log(num1 - num2);
// } else {
//     console.error('Invalid operator specified.');


///Question#3
// function calculateWithOperator(num1, num2, operator) {
//     if (!operator || (operator !== '+' && operator !== '-')) {
//         operator = '+';
//     }
//     switch (operator) {
//         case '+':
//             return num1 + num2;
//         case '-':
//             return num1 - num2;
//         default:
//             console.error('Invalid operator specified.');
//             return NaN;
//     }
// }

// // Test cases
// console.log(calculateWithOperator(5, 3, '+'));    
// console.log(calculateWithOperator(5, 3, '-'));     
// console.log(calculateWithOperator(5, 3));           
// console.log(calculateWithOperator(5, 3, '*'));     


///Question#4
// function calculateWithOperator(num1, num2, operator) {
//     if (!operator || (operator !== '+' && operator !== '-')) {
//         operator = '+';
//     }
//     switch (operator) {
//         case '+':
//             return num1 + num2;
//         case '-':
//             return num1 - num2;
//         default:
//             console.error('Invalid operator specified.');
//             return NaN;
//     }
// }

// Define variables
// let a = 10;
// let b = 5;
// let op = '+';
// console.log(`Result of ${a} ${op} ${b} is:`, calculateWithOperator(a, b, op));
// op = '-';
// console.log(`Result of ${a} ${op} ${b} is:`, calculateWithOperator(a, b, op));
// console.log(`Result of ${a} and ${b} with default operator is:`, calculateWithOperator(a, b));


///Question#5

let num1 = 5;
let num2 = 3;
let operator = '+';
function calculate(a, b, op = 'add') {
    if (op === 'add' || op === '+') {
        return a + b;
    } else if (op === 'subtract' || op === '-') {
        return a - b;
    } else {
        console.log('Invalid operator, defaulting to addition.');
        return a + b;
    }
}
console.log(`Result of addition: ${calculate(num1, num2, operator)}`);
operator = '-';
console.log(`Result of subtraction: ${calculate(num1, num2, operator)}`);
console.log(`Default operation (addition): ${calculate(num1, num2)}`);


////Practice exercise 4.5
///Question#1
// let prize = prompt("Please select a number between 0 and 10:");
// prize = parseInt(prize, 10);

// if (isNaN(prize) || prize < 0 || prize > 10) {
//     console.log("Invalid input. Please refresh the page and enter a number between 0 and 10.");
// } else {
//     console.log(`You selected the number: ${prize}`);
// }


///Question#2
// let prize = prompt("Please select a number between 0 and 10:");
// prize = Number(prize);
// if (isNaN(prize) || prize < 0 || prize > 10) {
//     console.log("Invalid input. Please refresh the page and enter a number between 0 and 10.");
// } else {
//     console.log(`You selected the number: ${prize}`);
// }


//Question#3
// let prize = prompt("Please select a number between 0 and 10:");
// prize = Number(prize);

// if (isNaN(prize) || prize < 0 || prize > 10) {
//     console.log("Invalid input. Please refresh the page and enter a number between 0 and 10.");
// } else {
//     let outputMessage = "My Selection: ";
//     console.log(`${outputMessage}${prize}`);
// }

//Question#4

// let prize = prompt("Please select a number between 0 and 10:");

// prize = Number(prize);


// if (isNaN(prize) || prize < 0 || prize > 10) {
//     console.log("Invalid input. Please refresh the page and enter a number between 0 and 10.");
// } else {
   
//     let outputMessage = "My Selection: ";
//     switch (prize) {
//         case 0:
//             console.log(`${outputMessage}You win a trip to Hawaii! `);
//             break;
//         case 1:
//         case 2:
//         case 3:
//             console.log(`${outputMessage}You win a gift card! `);
//             break;
//         case 4:
//         case 5:
//         case 6:
//             console.log(`${outputMessage}You win a movie ticket! `);
//             break;
//         case 7:
//         case 8:
//         case 9:
//         case 10:
//             console.log(`${outputMessage}You win a free dinner! `);
//             break;
//         default:
//             console.log("Invalid input. Please refresh the page and enter a number between 0 and 10.");
//             break;
//     }
// }


//Question#5

// let prize = prompt("Please select a number between 0 and 10:");

// prize = Number(prize);

// if (isNaN(prize) || prize < 0 || prize > 10) {
//     console.log("Invalid input. Please refresh the page and enter a number between 0 and 10.");
// } else {

//     let outputMessage = "My Selection: ";
//     let accumulatedPrizes = "";

//     switch (prize) {
//         case 0:
//             accumulatedPrizes += "Trip to Hawaii, ";
//         case 1:
//         case 2:
//         case 3:
//             accumulatedPrizes += "Gift card, ";
//             break;
//         case 4:
//         case 5:
//         case 6:
//             accumulatedPrizes += "Movie ticket, ";
//             break;
//         case 7:
//         case 8:
//         case 9:
//         case 10:
//             accumulatedPrizes += "Free dinner, ";
//             break;
//         default:
//             console.log("Invalid input. Please refresh the page and enter a number between 0 and 10.");
//             break;
//     }


//     console.log(`${outputMessage}${accumulatedPrizes}`);
// }

//Question#6

let prize = prompt("Please select a number between 0 and 10:");


prize = Number(prize);


if (isNaN(prize) || prize < 0 || prize > 10) {
    console.log("Invalid input. Please refresh the page and enter a number between 0 and 10.");
} else {
    
    let outputMessage = "My Selection: ";
    let accumulatedPrizes = "";
    switch (prize) {
        case 0:
            accumulatedPrizes += "Trip to Hawaii";
            break;
        case 1:
        case 2:
        case 3:
            accumulatedPrizes += "Gift card";
            break;
        case 4:
        case 5:
        case 6:
            accumulatedPrizes += "Movie ticket";
            break;
        case 7:
        case 8:
        case 9:
        case 10:
            accumulatedPrizes += "Free dinner";
            break;
        default:
            console.log("Invalid input. Please refresh the page and enter a number between 0 and 10.");
            break;
    }


    let message = `${outputMessage}${accumulatedPrizes}. Congratulations!`;


    console.log(message);
}



////Chapter projects
///Number Game///////

let number = prompt("Welcome to the Number Game! Please enter a number between 1 and 10:");
number = Number(number);
if (isNaN(number) || number < 1 || number > 10) {
    console.log("Invalid input. Please refresh the page and enter a number between 1 and 10.");
} else {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    if (number === randomNumber) {
        console.log(`Congratulations! You guessed the correct number: ${randomNumber}! `);
    } else {
        console.log(`Sorry, you guessed ${number} but the correct number was ${randomNumber}. Try again!`);
    }
}

/////Friend checker game
const friends = ["Zakia", "Areeba", "Saira", "Eisha", "Rubina"];

let userInput = prompt("Welcome to the Friend Checker game! Enter a name:");


if (userInput) {

    userInput = userInput.trim();
    userInput = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();

    if (friends.includes(userInput)) {
        console.log(`Yes! ${userInput} is your friend. `);
    } else {
        console.log(`Sorry, ${userInput} is not your friend.`);
    }
} else {
    console.log("Invalid input or no name entered. Please try again.");
}


////Rock Paper Scissors game
const options = ["rock", "paper", "scissors"];

let userChoice = prompt("Let's play Rock Paper Scissors! Choose: rock, paper, or scissors:");


userChoice = userChoice.trim().toLowerCase();

if (options.includes(userChoice)) {
  
    const randomIndex = Math.floor(Math.random() * options.length);
    const computerChoice = options[randomIndex];

    if (userChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${userChoice}.`);
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${userChoice} beats ${computerChoice}.`);
    } else {
        console.log(`You lose! ${computerChoice} beats ${userChoice}.`);
    }
} else {
    console.log("Invalid choice. Please choose: rock, paper, or scissors.");
}


