//Loop- repeat a block of code for how many times we want it to run

//for loop
//for loop is usually used to run code a predetermined number of times.


/* A new variable in this case i is assigned value 1.
    a test is performed to determine whether i is less than 5.
    if it is true the statement inside the loop is executed.
    if not the value of i is incremented.
    the test is done again to determine whether i is less than 5,
    if so the statement inside the loop is executed. The test 
    repeats until the condition expression no longer evaluates. */

for(let i = 0; i <= 5; i++){
    console.log(i);
}

for (let i = 5; i >= 0; i--){
    console.log(i);
}

//while loop
/* executes a statement or code repeatedly as long as
   the expression is true and once the expression becomes false, the loop terminates. */

var age = 0;
while(age < 10){
    console.log("I am " + age);
    age++;
}

//do while loop
//defines a code block to be executed once, and repeated as long as a condition is true.
var count = 1;
do{
    console.log("current count:" + count);
    count++;
}while(count < 10);


//break is used to exit a loop early
for(let i = 0; i <= 5; i++){
    if(i == 3) {
        break
    }
    console.log(i)
}

//continue is used to tell the interpreter to immediately start the next iteration of loop and skip the remaining code block.
for (let i = 1; i < 20; i++){
    if(i%2!=0){
        continue;
    } console.log(i + " is an even number");
}