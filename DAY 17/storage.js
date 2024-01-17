//with web storage web applications can store data locally within the user's browser.
//large amounts of data can be stored locally without affecting the website performance.

//localStorage object
/* stores data on the browser without an expiration date. The data will be
        available on the browser even if the browser is closed. When we set data to be stored in a localStorage
        , it will be stored as a string. If we are storing an array or an object, 
        we should stringify it first to keep the format */

//storing
localStorage.setItem("firstName","Pauline");
console.log(localStorage);

localStorage.setItem("lastName", "Oraro");
console.log(localStorage);

localStorage.setItem("age", 23);
console.log(localStorage);

const skills = ["HTML", "CSS", "Javascript", "React"];
const mySkills = skills.join(",");
console.log(mySkills);
localStorage.setItem("skills", mySkills);
console.log(localStorage);

const user = {
    myName: "kate",
    age:22,
    occupation:"interior decorator"
};
const myUser = JSON.stringify(user);
localStorage.setItem("user", myUser);


//We get data from the local storage using localStorage.getItem() method.
let myFirstName = localStorage.getItem("firstName");
let myLastName = localStorage.getItem("lastName");
let myAge = localStorage.getItem("age");
let skill =  localStorage.getItem("skills");
let skillSet = skill.split(",");
console.log(myFirstName, myLastName, myAge, skillSet);


//The clear method, will clear everything stored in the local storage