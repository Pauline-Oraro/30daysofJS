/*regular expressions helps to find pattern in data. 
Can be used to check if some pattern exists in different data types */

//a regular expression takes two parameters. One required search pattern and an optional flag
//a pattern is used for searching and replacing characters
/* flags;
        g- global flag
        i- case insensitive
        m- multiline */


//testing for a match to return either true or false
const firstString = "I love Javascript and i also love React";
const myPattern = new RegExp("love");
const firstResult = myPattern.test(firstString);
console.log(firstResult);

const secondString = "Coding is the most challenging thing to learn but practice makes perfect";
const secondPattern = /Coding/
const secondResult = secondPattern.test(secondString);
console.log(secondResult);

//match returns an array containing all matches in the expression
const thirdString = "Reading increases knowledge so you should incorporate reading into your daily routines";
const thirdPattern = /reading/gi;
const thirdResult = thirdString.match(thirdPattern);
console.log(thirdResult);

const fourthString = "I love coding and i also love reading books.";
const fourthPattern = /love/gi
const pat = /love/
const fourthResult = fourthString.match(fourthPattern);
console.log(fourthResult);
const res = fourthString.match(pat);
console.log(res);


//search() tests for a match and returns the index of the match
const text = "my first language that i learned was C";
const pattern = /C/;
const result = text.search(pattern);
console.log(result);
const patternTwo = /first/
const resultTwo = text.search(patternTwo);
console.log(resultTwo);
const patternThree = /that/
const resultThree = text.search(patternThree);
console.log(resultThree);



//replace() executes the search of a match then replaces the match
const myText = "Python is the most beautiful language that a human begin has ever created. I recommend python for a first programming language";
const replacedText = myText.replace(/python/gi, "Javascript");
console.log(replacedText);



//square bracket
const names = "Angela, Bailey, Catherine, Daniella, Eunice, Fernanda";
const testNames = /[A-Za-z]+/g;
const match = names.match(testNames);
console.log(match)