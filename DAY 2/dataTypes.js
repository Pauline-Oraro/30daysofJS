//data types is the kind of data that the variable holds.

//primitive data types. Once a primitive data is created we cannot modify it
let myFirstName = "Pauline"//string
let myAge = 22;//number
let isMarried = false //boolean
let value = null //null
let country; //undefined
console.log(myFirstName, myAge, isMarried, value, country);

//non-primitive data types. Can be modified after being created
let myArray = [10, 20, "Oraro"];
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