//creating an element
//to create an element we use tag name


const myElement = document.createElement("h2");
myElement.style.backgroundColor = "Thistle";
myElement.style.fontFamily = "monospace";
myElement.style.fontSize = "24px";
myElement.style.textAlign = "center"
myElement.textContent = "I am loving the 30days Javascript challenge";
document.body.appendChild(myElement);

let text
for(let i = 0; i < 5; i++){
    text = document.createElement("p");
    text.style.fontSize = "30px";
    text.fontFamily = "cursive";
    text.textContent = "Javascript"
    document.body.appendChild(text)
}

const myText = document.createElement("h3");
const sentence =document.createTextNode("Javascript is the programming language for the web");
myText.appendChild(sentence);
document.body.appendChild(myText);
