//higher order functions
/* are functions that take other functions as arguments
    or return a function as a value */

//callback functions
//a callback is a function which can be passed as an argument to another function

const callback = (n) => {
    return n * n
}

function cube(callback, n) {
    return callback(n) * n
}

console.log(cube(callback, 3));

function square(l, w){
    return l * w;
}

function mySquare(square){
    return "The area of a square is " + square
}
console.log(mySquare(square(12,12)));

//returning a function as a value
const first = (a) =>{
    const second = (b) => {
        const third = (c) => {
            return a + b + c
        }
        return third
    }
    return second
}

console.log(first(10) (10) (10));

function myFunction(){
    return "This is the first function"
}
function myFunctionTwo(){
    return myFunction()
}
console.log(myFunctionTwo());

//setInterval function
//do some activity continuously within some interval of time

function saySomething(){
    console.log("I am the best javascript coder")
}
setInterval(saySomething, 2000);

//setTimeout function
//execute some action at some time in the future
function hello(){
    console.log("Hello javascript coder")
}
setTimeout(hello, 3000);


//functional programming
/* the forEach() method loops through any array, executing a provided function
    for each array element. This function refers to a callback function*/

const studentDetails = [
    {name: "Paul", age: 18, course: "Computer science"},
    {name: "Kevin", age: 20, course: "Fashion Design"},
    {name: "Kate", age: 17, course: "Information technology"},
    {name: "Melvin", age: 24, course: "Food beverage"},
    {name: "Ocampo", age: 23, course: "Information studies"}
];

studentDetails.forEach((detail) => {
    let sentence = "I am " + detail.name + " a student at Nairobi University";
    console.log(sentence);
});

const countries = ["kenya", "uganda", "tanzania", "somalia", "rwanda", "burundi"];
countries.forEach((country) => {
    console.log(country.toUpperCase());
});


//the map() method creates a new array by performing a function on each array
const numbers = [2, 4, 6, 8, 10];
const evenNumbers = numbers.map((num) => {
    return num * 2;
});
console.log(evenNumbers);


//the filter() method creates a new array with array elements that pass a test
const scores = [
    {name: "Paul", score: 65},
    {name: "Kevin", score: 75},
    {name: "kate", score: 80},
    {name: "Melvin", score: 85},
    {name: "Ocampo", score: 90}
]

const aboveEighty = scores.filter((score) => {
    return score.score >= 80;
})
console.log(aboveEighty);


//the reduce() method is used to to iterate and “reduce” an array's values into one value.
const myNumbers = [1, 2, 3, 4, 5];
const sum = myNumbers.reduce((acc, cur) => {
    return acc + cur;
})

console.log(sum);