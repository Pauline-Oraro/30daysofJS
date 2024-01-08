//a variable can be declared at different scopes. Variables can be declared globally or locally scope.



//global scope
//a globally declared variable can be accessed everywhere in the same file.

let a = "I love coding";//this is a global scope
console.log(a);

function myFunction(){
    console.log(a);
}
myFunction();


//local scope
//a variable declared as local can only be accessed only in certain block code
function letsLearnScope() {
    // block scope
    if (true) {
        // variables declared inside the if will not be accessed outside the if block
    let a = 'Python'
    let b = 20
    let c = 30
    let d = 40
        console.log(a, b, c, d);
    }
}
letsLearnScope()





//objects
const rectangle = {
    length: 10,
    width: 10
}
console.log("The area of a rectangle is " + rectangle.length * rectangle.width);

const dog = {};
console.log(dog);

const newDog = {
    name: "German ",
    legs: 4,
    color: " brown ",
    age: 3,
    bark: function (){
        return " woof woof"
    }
}
console.log(newDog.name + newDog.legs + newDog.color + newDog.age + newDog.bark());
newDog.breed = "German shepherd ";
newDog.getInfo = function (){
    return this.name + this.color
}

console.log(newDog.breed + newDog.getInfo());

const person = {
    name: "Kate",
    age: 22,
    occupation: "Doctor",
    country: "Kenya",
    city: "Nairobi"
}
console.log(person["name"]);
console.log(person["occupation"]);
console.log(person.country);

//creating a function inside of an object
const user = {
    firstname: "Millie ",
    secondname: "Jake",
    occupation: "Dentist",
    age: 22,
    getFullName: function () {
        return this.firstname + this.secondname;
    }
};
console.log("The fullname of the first user is: " + user.getFullName());


const firstUser = {
    firstname: "Hiltra",
    secondname: " Pauly",
    occupation: "Fashion designer",
    age: 33,
    nationality: "Tanzanian"
};

console.log(firstUser);

firstUser.isMarried = true;
firstUser.occupation = "UX/UI designer";
firstUser.secondname = " Pauline";

console.log(firstUser);


//Object.assign method copies an object without modifying the original object
const secondPerson = {
    firstname: "katelynn",
    secondname: "Nolan",
    age: 24,
    occupation: "Developer",
    address:{
        street: "Waiyaki street",
        pobox: 3409,
        road: "Waiyaki way"
    }
}

const thirdPerson = Object.assign({}, secondPerson);
console.log(thirdPerson);

//Object.keys method is used to get the keys or properties of an object as an array
const occupation = Object.keys(thirdPerson);
console.log(occupation);
const address = Object.keys(secondPerson.address);
console.log(address);

//Object.values method is used to get the values of an object as an array
const values = Object.values(secondPerson.address);
console.log(values);

//Object.entries method is used to get the keys and the values of an object as an array
const entries = Object.entries(secondPerson.address);
console.log(entries);

//hasOwnProperty method is used to check if a specific key or property exists in an object
console.log(thirdPerson.hasOwnProperty("occupation"));
console.log(thirdPerson.hasOwnProperty("work"))