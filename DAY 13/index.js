//console object methods are used to show output on the browser console.
//the document.write meethod is used to show output on the browser document which is the viewport.
//both methods are used for testing and debugging purposes.


//console.log() method shows the output on the browser console
console.log("30 days of learning Javascript");
//can style the logging messages
console.log("%c30 days of Javascript", "color: crimson");


//console.warn() method is used to give a warning on the browser
console.warn("this is a warning");

//console.error() method shows error messages
console.error("this is an error message");


//console.table() method displays data in tabular form on the console
const names = ["Kathryn", "Daniel", "Julia", "Liza"];
console.table(names);

const user = {
    fullName: "Pauline Oraro",
    age: 23,
    occupation: "Web designer",
    isMarried: true
}
console.table(user);

const capitalCities = [
    ["Kenya", "Nairobi"],
    ["Tanzania", "Dodoma"],
    ["Rwanda", "Kigali"],
    ["South Africa", "Pretoria"]
]
console.table(capitalCities);

const users = [
    {
        fullName: "Kate Kriger",
        occupation: "French teacher",
        country: "France",
        age: 24
    },
    {
        fullName: "Liza Soberano",
        occupation: "Actor",
        country: "Philipines",
        age: 26
    },
    {
        fullName: "Hailey Jensen",
        occupation: "Youtuber",
        country: "United States",
        age: 27
    }
];

console.table(users);


//console.info displays information message on the browser console
console.info("30 Days Of JavaScript challenge is trending on Github");


//console.group() can help to group different log groups
console.group("Names");
console.log(names);
console.groupEnd();

console.group("Users");
console.log(users);
console.groupEnd();

console.group("Countries and capital cities");
console.log(capitalCities);
console.groupEnd();


//console.count() method prints the number of times the console.count() is called
const fun = () => {
    console.count("function has been called")
}
fun();
fun();
fun();

//console.clear() method cleans the browser console
