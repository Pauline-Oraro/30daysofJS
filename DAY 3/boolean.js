//booleaan value is either true or false
let isMarried = true;
let isRaining = false;
console.log(isMarried, isRaining);

/*truthy values;
    1.all numbers either positive or negative except zero
    2.all strings except an empty string
    3.the boolean true value*/


/*falsy values;
    1.zero
    2.the boolean false value
    3.null
    4.undefined
    5.Nan
    6.empty string*/ 

//operators
//assignment operators
//an equal sign is used to assign a value to a variable
let myValue = 44;
let myCity = "Nairobi";
console.log(myValue, myCity);

//arithmetic operators
let numOne = 10;
let numTwo = 50;
//addition
let sum = numOne + numTwo;
console.log(sum);

//subtraction
let sub = numTwo - numOne;
console.log(sub);

//multipication
let multiply = numOne * numTwo;
console.log(multiply);

//division
let divide = numTwo / numOne;
console.log(divide);

//calculate area of a cirlce
const PI = Math.PI;
const radius = 10;
const areaOfCircle = PI * radius * radius;
console.log("Area of a circle: " + areaOfCircle);


//comparison operators
console.log(5 > 2);  //true, because 5 is greater than 2
console.log(5 >= 2); //true, because 5 is greater than 2
console.log(5 < 2); //false, because 5 is greater than 2
console.log( 2 < 5); //true, because 2 is less than 5
console.log(2 <= 5); //true, because 2 is less than 5
console.log(5 == 2); //false, because 5 is not equal to 2
console.log(5 == 2); //true, because 5 is equal to 5
console.log(5 != 2); //true, because 5 is not equal to 2
console.log(2 == "2"); //true, compares only value
console.log(2 === "2"); //false, compares value and data type
console.log(5 !== "5"); //true, compare both value and data type

/*this operator(!==) returns false where the identical operator would return true and returns true where the
identical operator would return false*/

//logical operators
// Logic and. true if both of the operands are true
let myNum = 4 > 3 && 10 > 5
console.log(myNum);  //true

let myNumTwo = 4 > 3 && 10 < 5
console.log(myNumTwo); //false

//Logic or. true if either of the operands is true
let myNumThree = 4 < 3 || 10 > 5
console.log(myNumThree); //true

let myNumFour = 4 < 3 || 10 < 5
console.log(myNumFour); //false

//Logic not
let myNumFive = !(4 > 3);
console.log(myNumFive); //false

//increment value
let countOne = 0;
//pre-increment
console.log(++countOne);
//post-increment
console.log(countOne++);
console.log(countOne);
console.log(countOne);

let count = 0
console.log(count++)        
console.log(count)

//decrement value
let countTwo = 0;
//pre-decrement
console.log(--countTwo);
console.log(countTwo);
//post-decrement
console.log(countTwo--);
console.log(countTwo);
