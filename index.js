const prompt = require('prompt-sync')();

// if statement to print "Happy Friday", if it is a Friday 
// if statement to print "It is the weekend", if it is a Saturday or Sunday 
// if statement to print "This is a normal weekday", if it Mon, Tues, Wed, or Thur 

// let day = "Monday";

// if (day === "Friday"){

//     console.log("Happy Friday");

// } else if (day === "Saturday" || day === "Sunday") {

//     console.log("It is the weekend");

// } else if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday") {

//     console.log("This is a normal weekday");

// } else{

//     console.log("You inputted an invalid day of the week");
// }



// let age = parseInt(prompt("What is your age? "));

// while(age < 21){

//     console.log(`You are ${age} years old. Please come back in a year`);

//     // age = age + 1;
//     // age += 1;
//     age++;

// }



let correctAnswer = 123;
let guess = parseInt(prompt("What is your guess? "));

let numberOfGuesses = 0;

while(correctAnswer != guess && numberOfGuesses <= 5){

    // continue playing the game
    console.log("Hi, you guessed incorrectly. Please try again.");
    guess = parseInt(prompt("What is your guess? "));

    numberOfGuesses++;

}

if (numberOfGuesses < 6){

    console.log("Congrats, you guessed correctly");
} else{
    console.log("Unfortunately, you have LOST");
}

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89,144,233,377,610,987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229

// 0, 1, 0+1 = 1, 1+1=2, 1+2=3, 2+3=5, 3+5=8, 5+8=13, 8+13=21

