//TODO: Exercise 1.0 - LINKING JS
// *Create an HTML file and a JS file and link them to each other
/*TODO: Exercise 1.1
Within the JS file, create three new variables called “genre” and “rating” and
“pillows”. Give these the values of “horror”, “5” and “1”, respectively.*/
var genre = prompt("Please enter movie genre preferably horror")
var rating = prompt("Whats is the rating?(1-10)")
var pillows = prompt("Do you have pillows?(1=yes,0=no)")
/* TODO:Exercise 1.2
Imagine we are hosting a movie night. One of your friends is a huge scaredy cat, but
the rest of you want to watch the new horror movie that’s just come out. Create a
conditional flow for your options.
- If the movie has a 5 star rating and is a horror AND you have a pillow, your
friend will watch it.
- If the movie has a rating of 5 stars, is a horror but you have no pillows, your
friend won’t watch it.
- If the movie has a rating of less than 1 star, there’s no point watching it.
- If it’s not a horror movie, your friend will watch anything.
- Otherwise, you can all just hang out and talk.*/
if(rating >= 5 && genre == "horror" && pillows == 1){
    console.log("Friends will watch!");
}else if(rating == 5 && genre == "horror" && pillows == 0){
    console.log("Friend Wont watch");
}else if(rating < 1){
    console.log("No one will watch");
}else if(genre !== "horror"){
    console.log("Its no horror but lets watch!");
}else{
    console.log("lets chill bro");
}