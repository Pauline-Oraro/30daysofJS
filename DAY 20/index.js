//we use camelCase for variables and functions
let firstName = "Pauline";
let secondName = "Oraro";
let country = "Kenya";
let city = "Nairobi";


function printName(firstName, lastName){
    return firstName + " " + lastName
}
console.log(printName("Hiltra", "Kate"));

//array names can be in plural form
const names = ["Pauline", "Kate", "Catherine", "Hailey"];
const numbers = [22, 23, 24, 25, 26];
const countries = ["Kenya", "Tanzania", "Uganda", "Somalia"]
countries.push("Rwanda");
console.log(countries);

//declare objects with const
const user = {
    firstName: 'Pauline',
    lastName: 'Akinyi',
    age: 23,
    country: 'Kenya',
    city: 'Nairobi',
    skills: ['HTML','CSS','JavaScript','TypeScript', 'React'],
    isMarried: true
}

//we declare classes with CamelCase which starts with a capital letter
class Person {
    constructor(firstName, lastName, age, occupation){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.occupation = occupation
    }
}
let myPerson = new Person("Bailey", "Richards", 25, "Computer tutor");
console.log(myPerson);