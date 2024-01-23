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



let ageInput = document.getElementById("myAge");
ageInput.addEventListener("input", function(e) {
    let age = e.target.value
    if (age > 18){
        const newElement = document.createElement("p");
        const newText = document.createTextNode("You are old enough to drive");
        newElement.appendChild(newText);
        document.body.appendChild(newElement);
    } else {
        const element = document.createElement("p");
        const text = document.createTextNode("You are not old enough to drive");
        element.appendChild(text);
        document.body.appendChild(element);
    }
})


let a = 4;
let b = 3;
if (a > b){
    console.log("4 IS GREATER THAN 3");
} else {
    console.log("4 IS LESS THAN 3 WHICH IS NOT TRUE");
}

function grade(score){
    if(score >= 80 && score <= 100){
        return "A"
    } else if(score >= 70 && score < 80){
        return "B"
    } else if(score >= 60 && score < 70){
        return "C"
    } else if(score >= 50 && score < 60){
        return "D"
    } else if(score >= 40 && score < 50){
        return "F"
    } else {
        return "Invalid score"
    }
};

console.log(grade(55));
console.log(grade(95));
console.log(grade(10));
console.log(grade(65));
console.log(grade(75));