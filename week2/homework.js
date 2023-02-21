/* Homework Task - Quitting the Loop
We know that while loops can be infinite. Create a do while loop that takes
in user input and returns different log statement options, but only if the
input statement is not stop. If the statement is stop, break the loop.*/

let userInput;

do {
  userInput = prompt("Please enter a statement");

  switch (userInput) {
    case "hello":
      console.log("Hello there!");
      break;
    case "how are you":
      console.log("I'm doing well, thanks for asking.");
      break;
    case "goodbye":
      console.log("Goodbye!");
      break;
    case "stop":
      break;
    default:
      console.log("I'm sorry, I didn't understand that.");
      break;
  }
} while (userInput !== "stop");
