// assigment 6 to 9 Javascript


// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

// Ans:

var a = 10;
console.log("The value of a is " ,a);
console.log("Now the value a is 10")

console.log("The value of ++a is " ,++a);
console.log("Now the value ++a is 11")

console.log("The value of a++ is " ,a++);
console.log("Now the value a++ is 12")

console.log("The value of --a is " ,--a);
console.log("Now the value --a is 11")

console.log("The value of a-- is " ,a--);
console.log("Now the value a-- is 10")
// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a; 1
// --a - --b; 1
// --a - --b + ++b; 2
// --a - --b + ++b + b--; 3

var a = 2, b = 1;
var result = --a - --b + ++b + b--;
console.log(result);



// 3. Write a program that takes input a name from user &
// greet the user.


var user_name =prompt("Enter your username")
user= user_name == "haseeb";
user= alert("welcome to my website")
console.log(user_name)


// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

var table_num=+prompt("enter a table number")
console.log(table_num + ' x 1 = ' + table_num*1)
console.log(table_num + ' x 2 = '+ table_num*2)
console.log(table_num + ' x 3 = ' + table_num*3)
console.log(table_num + ' x 4 = ' + table_num*4)
console.log(table_num + ' x 5 = ' + table_num*5)
console.log(table_num + ' x 6 = ' + table_num*6)
console.log(table_num + ' x 7 = ' + table_num*7)
console.log(table_num + ' x 8 = '+ table_num*8)
console.log(table_num + ' x 9 = ' + table_num*9)
console.log(table_num + ' x 10 = '+ table_num*10)

// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.

// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like

// a) Take three subjects name from user and store them in 3
//  different variables.


var subject1 =prompt("Enter your subj 1")
var subject2 =prompt("Enter your subj 2")
var subject3 =prompt("Enter your subj 3")
subject_name =subject1+subject2+subject3

// b) Total marks for each subject is 100, store it in another
// variable.
var marks_sub1 = 100;
var marks_sub2 = 100;
var marks_sub3 = 100;
total_sub_mark = marks_sub1 + marks_sub2 + marks_sub3



// c) Take obtained marks for first subject from user and
// stored it in different variable.

// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
var obt_marks_sub1 = +prompt("Enter obtained marks subject1")
var obt_marks_sub2 = +prompt("Enter obtained marks subject2")
var obt_marks_sub3 = +prompt("Enter obtained marks subject3")
obt_total=obt_marks_sub1+obt_marks_sub2+obt_marks_sub3






//  var total_obtained_marks =obtained_marks1+obtained_marks2+obtained_marks3
// e) Now calculate total marks and percentage and show the
// result in browser like
var total_marks = obt_marks_sub1 + obt_marks_sub2 + obt_marks_sub3;


console.log(subject1 + "  " +obt_marks_sub1 )
console.log(subject2 + "  " +obt_marks_sub2 )
console.log(subject3 + "  " +obt_marks_sub3 )

console.log("Total marks " , total_marks);

percentage = (obt_total / total_sub_mark) * 100  
console.log("this is percentage     " + percentage)
 


