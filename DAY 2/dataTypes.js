//data types is the kind of data that the variable holds.

//primitive data types. Once a primitive data is created we cannot modify it
let myFirstName = "Pauline"//string
let challenge = "30 Days of Javascript"
let myAge = 22;//number
let isMarried = false //boolean
let value = null //null
let country; //undefined
console.log(myFirstName, myAge, isMarried, value, country, challenge);
console.log(challenge.length);
console.log(myFirstName.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.includes("script"));
let myString = challenge.split(" ");
console.log(myString);
console.log(challenge.replace("Javascript", "Python"));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt("J"));
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));
let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.lastIndexOf("because"));
console.log(sentence.trim());



//non-primitive data types. Can be modified after being created
let myArray = [10, 20, "Oraro"];
let companies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
let myCompanies = companies.join(" , ");
console.log(myCompanies);
let user = {
    name:"Kate",
    age: 23,
    country: "Tanzania",
    occupation: "Secretary"
}
console.log(myArray[0], myArray[1], myArray[2]);
console.log(user.name, user.age, user.country, user.occupation);

//math object provide a lot of ways to work with numbers
const PI = Math.PI
console.log(PI);