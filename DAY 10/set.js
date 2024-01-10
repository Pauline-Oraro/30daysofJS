// a set is a collection of unique values and each value can only occur once in a set.

//create an empty set
const names = new Set();
console.log(names);

//creating a set from an array
const lang = ["English" ,"Swahili", "Spanish", "Swahili", "English", "Chinese"];
const setOfLangs = new Set(lang);
console.log(setOfLangs);

//adding an element to a set
const letters = new Set();
letters.add("a");
letters.add("b");
letters.add("c");
letters.add("d");
letters.add("e");
letters.add("f");
letters.add("g");
console.log(letters);

const companies = new Set();
companies.add("Facebook");
companies.add("Amazon");
companies.add("Netflix");
companies.add("Google");
console.log(companies);

//deleting an element in the set
letters.delete("e");
letters.delete("f");
letters.delete("g");
console.log(letters);

//checking an element in the set
console.log(companies.has("Google"));
console.log(companies.has("Apple"));
console.log(letters.has("e"));

//clearing the set
letters.clear()
console.log(letters);


//Maps
//A Map holds key-value pairs where the keys can be of any datatype


//create an empty map
const myMap = new Map();
console.log(myMap);

//creating a map from an array
const capitalCities = [
    ["Kenya", "Nairobi"],
    ["Uganda", "Kampala"],
    ["Tanzania", "Arusha"],
    ["Somalia", "Mogadishu"]
];
const cities = new Map(capitalCities);
console.log(cities);

//adding values to the map
cities.set("United states", "Washington DC");
cities.set("South Africa", "Pretoria");
console.log(cities);

//getting a value from a map
console.log(cities.get("Somalia"));
console.log(cities.get("Kenya"));

//checking a key in a map
console.log(cities.has("Somalia"));
console.log(cities.has("South Africa"));