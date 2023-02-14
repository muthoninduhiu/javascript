/*Exercise 2.1
Let’s modify this programme to get a new colour from the user and add it to our array.
Using the prompt() input, get a new colour from the user and then use the push()
command to add this new variable to the favourite colours array. Then use
console.log() to show that this change has been made correctly. 
*/
let colored = ['red','pink','maroon','amber','blue','orange','black']

let input = prompt("Which color would you like to add to our database?")

let add = colored.push(input)

console.log(`Exercise 2.1 (PUSH) :${colored}`)