//destructuring is a way to unpack array, objects and assigning them to variables
//destructuring arrays

const numbers = [11, 111, 1111];
let [numOne, numTwo, numThree] = numbers;
console.log(numOne, numTwo, numThree);

const names = ["Pauline", "Akinyi", "Oraro"];
const [firstName, middleName, lastName] = names;
console.log(firstName, middleName, lastName);

const fullStack = [
    ["HTML", "CSS", "JS", "REACT"],
    ["NODE", "EXPRESS", "MONGODB"]
];
const [frontend, backend] = fullStack;
console.log(frontend, backend);

const constants = [2.72, 3.14, 9.81, 37, 100];
const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp);

const countries = ['Kenya', 'Uganda', 'Tanzania', 'Rwanda', 'Burundi'];
const [ke, ug, tz, rw, br] = countries;
console.log(ke, ug, tz, rw, br);

//if we like to skip some values on the array we use an additional comma
const evenNumbers = [2, 4, 6, 8, 10];
const [evenOne, , evenTwo, evenThree, evenFour] = evenNumbers;
console.log(evenOne, evenTwo, evenThree, evenFour);

const students = ["Paul", "Jake", "Andrea", "Francine"];
console.log(students);
const [studentOne, studentTwo, , studentThree] = students;
console.log(studentOne, studentTwo, studentThree);


const prime = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29];
const [primeOne, primeTwo, primeThree, ...rest] = prime;
console.log(primeOne, primeTwo, primeThree);
console.log(...rest);


//destructuring objects
//the name of the variable we use to destruct should be the same as the key or property of the object
const rectangle = {
    width: 10,
    length: 10,
    area:100
}
const {width, length, area} = rectangle;
console.log(width, length, area);

const myStudent = {
    name: "Kate diaz",
    course: "Hospitality",
    age:24,
    address: {
        street: "Waiyaki street",
        pobox:1212,
        road:"Waiyaki way"
    },
    isSingle: false
}

const {name, course, age, address, isSingle} = myStudent;
console.log(name, course, age, address.street, isSingle);
console.log(address.pobox);

//renaming during structuring
const square = {
    width: 20,
    length: 20,
    area: 400
}

const {width:w, length:l, area:a} = square;
console.log(w, l, a);


//spread operator
//when we destructure an array we use the spread operator to get the rest values of the array
const oddNumbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51,]
const [oddOne, oddTwo, ...oddRest] = oddNumbers;
console.log(oddOne, oddTwo);
console.log(...oddRest);


//spread operator to copy an array
const myNames = ["Pauly", "Akinyi", "Oraro"];
const wholeNames = [...myNames];
console.log(wholeNames);

//spread operator to copy an object
const user = {
    name: "Bailey",
    age: 32,
    work: "developer"
}

const copiedUser = {...user};
console.log(copiedUser);