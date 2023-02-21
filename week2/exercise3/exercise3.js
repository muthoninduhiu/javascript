/*Exercise 2.1 - We have a lot of students in this course! Let’s
create a for loop to create a student tracking system so we know
How many students we have. In your js file, create a list variable
called students. Fill it with the names “Sofia", "Elizabeth", "Sasha",
"Samantha", "Abigail", "Lorena", "Ayesha", "Adeyo", "Emil"*/
var student = ["Sofia","Elizabeth", "Sasha","Samantha", "Abigail", "Lorena", "Ayesha", "Adeyo", "Emil"];

/*Exercise 2.2 - Create a for loop to count through the number of
students within the students array. Hint: Use the .length method
instead of counting the number of students manually!*/
for(i = 0; i<student.length;i++){
    console.log(student[i]);
}
/*Exercise 2.3 - Let’s say we can only run a small class. Create
variables for class size (0), maxClassSize (7) and an empty
classList. Use a while loop to add random students to the
classList so long as the number of students in the new class is
less than the maximum size.*/
classSize = 0
maxClassSize = 7
classList = []
while(classSize < maxClassSize){
    // generate random student name
    const randomStudent = "Student" + Math.floor(Math.random()*100);
    // add students to class list with push method
    classList.push(randomStudent)
    // do an increment
    classSize = classList.length

}
console.log(classList)