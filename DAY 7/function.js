/* A function is a block of reusable code that are designed to perform a certain task
    It is declared using the function keyword, followed by a name and parentheses.
    The parentheses can take a parameter */


//function declaration
//without a parameter and return
function myFunction(){
    console.log("This is the first function");
}
myFunction();//calling function by its name and with its parentheses

function areaOfSquare(){
    let a = 20;
    let b = 20;
    let area = a * b;
    console.log("The area of a square is:" + area);
}
areaOfSquare();

//a function with a return
function myName(){
    let firstName = "Pauline ";
    let secondName = " Akinyi";
    let fullName = firstName + secondName;
    return fullName;
}
console.log(myName());

function areaofCircle(){
    let radius = 10;
    return radius * radius * Math.PI;
}
console.log(areaofCircle());

//a function with a parameter
function user(name, age){
    return "She is " + name + " and she is " + age;
}
console.log(user("Kate" ,22 ));

function areaofRectangle(l,w){
    let area = l * w;
    return  area;
}
console.log(areaofRectangle(10,10));

function sumOfNumbers(a,b,c,d){
    let sum = a + b + c + d;
    return "The sum of 4 numbers is: " + sum;
}
console.log(sumOfNumbers(10,10,10,10));


//function with unlimited number of parameters
function sumAllNumbers(){
    console.log(arguments);
}
sumAllNumbers(1,2,3,4);

//Anonymous function or without name
const anonymousFun = function() {
    console.log(
        'this is an anonymous function'
    )
}
anonymousFun();

//arrow function
const myArrowFunction = a => {
    let sum = a + a;
    return sum;
}
console.log(myArrowFunction(40));

