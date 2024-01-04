//conditional statements are used to perform different actions based on different conditions

//if statement
/* execute some code only if a specified condition is true, however
    if the condition is false we won't see the results. */

let num = 5;
if(num > 1){
    console.log(num + " is greater than 1");
}

//if else statement
/* execute a code if a condition is true and another code if the 
   condition is not true */

let myAge = 20;
if(myAge > 15){
    console.log("are allowed to drive");
} else{
    console.log("are not allowed to drive");
}

//if else---if else---statement
/* statements are executed based on the true condition,
    if none are true then the else block is executed */

let myNumber = 100;
if(myNumber > 90){
    console.log(myNumber + " is greater than 90");
} else if(myNumber < 200){
    console.log(myNumber + " is less than 200");
}else if(myNumber > 150){
    console.log(myNumber + " is not greater than 150");
} else {
    console.log(myNumber + " is not a number");
}

//switch statement
/* give an expression to evalute and several different statements to execute based on
    the value of the expression. The interpreter checks each case against the value of the
    expression until a match is found. If nothing matches a default condition is used. */

let weather = "cloudy"
    switch (weather) {
        case "rainy":
        console.log("You need a rain coat.")
        break
        case "cloudy":
        console.log("It might be cold, you need a jacket.")
        break
        case "sunny":
        console.log("Go out freely.")
        break
        default:
        console.log("No need for rain coat.")
    }