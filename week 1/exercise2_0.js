/* Exercise 2.0
Create a programme that lists your favourite colours as an array. Use the console.log()
statement to show the first element, then the last element and if there are an even
number of colours, also the middle element.*/
let colors = ['red','pink','maroon','amber','blue','orange','black']
let even  = (colors.length) / 2

console.log(`First Element: ${colors[0]} \nLast Element: ${colors[colors.length - 1]} \nThe Middle Element is: ${colors[parseInt(even)]}`)

if (even == 0){
    console.log("We are even!")

}else{
    console.log("We are odd!")
}

