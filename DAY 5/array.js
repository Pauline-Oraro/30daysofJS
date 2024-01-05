/*arrays are a way to store groups of different data types.
    each value in an array has an index and each value can be
    accessed by using their indexes. The index of an array starts from zero*/

//how to create an array
//array constructor
const myArr = Array();
//using square brackets
let myArrTwo = []


let numbers = [0, 10, 20, 30, 40];
let fruits = ["apples", "mangoes", "bananas", "strawberries", "oranges"];
console.log("The numbers are:" + numbers);
console.log("The fruits are:" + fruits);
//getting the array length
console.log("The total number of the numbers array is:" + numbers.length);
console.log("The total number of fruits in the fruits array is:" + fruits.length);

//an array can have different data types
let arr = [
    "Newyork",
    22,
    true,
    {name: "kate", city: "Arusha"}
];
console.log(arr);

//creating an array using split method. A string can be converted to an array with the split() method
let word = "I love javascript";
let myWord = word.split("");
console.log(myWord);
let wordTwo = 'html, css, javascript, tailwind, bootstrap, react, nextjs';
let myWordTwo = wordTwo.split(",");
console.log(myWordTwo);

//accessing array items using index
let names = ["Julia", "Gerald", "Kim", "Xian", "Maja", "Rambo"];
console.log(names[0]);
let lastName = names.length - 1;
console.log(names[lastName]);

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
] 

let lastIndex = webTechs.length - 1
console.log(webTechs[lastIndex]);

//modifying an array element
let countries = ["Kenya", "Tanzania", "Uganda", "Somalia", "Ethiopia"];
console.log(countries);
countries[2] = "Rwanda";
countries[3] = "Burundi";
console.log(countries);
let lastCountry = countries.length - 1;
countries[lastCountry] = "Eritrea";
console.log(countries);


//Concatenating array using concat
let firstNumber = [2, 3, 4, 5];
let secondNumber = [12, 13, 14, 15];
let thirdNumber = firstNumber.concat(secondNumber);
console.log(thirdNumber);

//getting an index of an array
const myNames = ["Pauline", "Akinyi", "Oraro", "Hiltra"];
console.log(myNames.indexOf("Akinyi"));
console.log(myNames.indexOf("Hiltra"));

//checking array
let check = [20, 30, 40, 50];
console.log(Array.isArray(check));

//add an item to an array using push
let cities = ["Mombasa", "Nairobi", "Kisumu"];
cities.push("Nakuru");
console.log(cities);
//removing an item from an array using pop method. The end
cities.pop();
console.log(cities);
//removing an item from an array using shift method. The beginning
cities.shift();
console.log(cities);
//adding an item from the beginning
cities.unshift("Eldoret");
console.log(cities);