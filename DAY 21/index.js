/* DOM stands for Document Object Model. It allows us to
      create, change or remove elements from the document */


//getting an element
//by tagname
const tagnames = document.getElementsByTagName("h2");
console.log(tagnames);

for(let i = 0; i < tagnames.length; i++){
    console.log(tagnames[i])
}

//by classname
const classes = document.getElementsByClassName("title");
console.log(classes);

for(let i = 0; i < classes.length; i++){
    console.log(classes[i]);
}

//by id
const firstElement = document.getElementById("first-title");
console.log(firstElement);

//by using queryselector methods
//can be used to select HTML element by its tag name, id or class
let firstTitle = document.querySelector('h1'); //selects the first available h1 element
console.log(firstTitle);
let secondTitle = document.querySelector('.title'); //selects the first available element with the class title
console.log(secondTitle);
let elements = document.querySelectorAll(".title");
console.log(elements);


//adding an attribute
//setAttribute
const myElement = document.querySelector("h1");
myElement.setAttribute("class", "firstTitle");
myElement.setAttribute("id", "firstId");

//adding text to HTML element
const myText = document.querySelector("h3");
myText.textContent="Fourth Title"

//adding style
myElement.style.backgroundColor = "khaki";
myText.style.fontFamily = "monospace";
myText.style.backgroundColor = "crimson";