//event listeners.
//We use addEventListener() method to listen to different event types on HTML elements.

const button = document.getElementById("myButton");
button.addEventListener("click", function() {
    const newElement = document.createElement("p");
    const newText = document.createTextNode("You have clicked the button");
    newElement.appendChild(newText);
    document.body.appendChild(newElement);
});

let paragraph = document.getElementById("myPara");
paragraph.addEventListener("click", function(){
    paragraph.style.backgroundColor = "crimson";
    paragraph.style.fontFamily = "monospace";
    paragraph.style.fontSize = "30px";
});

function clickMe(){ 
    alert("Hi there");
}

let double = document.getElementById("double");
double.addEventListener("dblclick", function(){
    double.style.backgroundColor = "hotpink";
})