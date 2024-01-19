/* A closure is a function having access to the parent scope
    even after the parent function has closed. Javascript allows writing function
    inside an outer function. We can write as many inner functions as we want. 
    The inner functions have access to the variables of the outer function. */


function myFirstFunction(){
    let count = 0;
    function mySecondFunction(){
        count++
        return count;
    }
    return mySecondFunction;
}
const innerFunc = myFirstFunction();
console.log(innerFunc());
console.log(innerFunc());
console.log(innerFunc());
console.log(innerFunc());


function add(){
    let counter = 0;
    function plusOne(){
        counter++
        return counter;
    }
    function minusOne(){
        counter--
        return counter;
    }
    return{
        plusOne:plusOne(),
        minusOne:minusOne()
    }
}
const myFuncs = add();
console.log(myFuncs.plusOne);
console.log(myFuncs.plusOne);
console.log(myFuncs.plusOne);
console.log(myFuncs.plusOne);
console.log(myFuncs.minusOne);
console.log(myFuncs.minusOne);
console.log(myFuncs.minusOne);
console.log(myFuncs.minusOne);

function myName(name) {
    return function(){
        console.log('Hi my name is ' + name);
    }
}

const names = myName("Pauline");
const secondName = myName("Kate");
const thirdName = myName("Hailey");
names();
secondName();
thirdName();



function greeting(){
    let firstGreeting = "Hello";
    let secondGreeting = " World";
    function myGreeting(){
        console.log(firstGreeting + secondGreeting);
    }
    return myGreeting;
}
const greetings = greeting();
greetings();


function personAccount(){
    let firstName = "Pauline";
    let lastName = "Oraro";
    let income = 300000;
    let expense = 20000;
    function totalIncome(){
        return "My total income is " + income;
    }
    function totalExpense(){
        return "My total expense is " + expense;
    }
    function accountInfo(){
        return "I am " + firstName + " " + lastName;
    }
    function accountBalance(){
        let balance = income - expense
        return "My account balance is " + balance;
    }
    return {
        totalIncome:totalIncome(),
        totalExpense:totalExpense(),
        accountInfo:accountInfo(),
        accountBalance:accountBalance()
    }
}
const myAccount = personAccount();
console.log(myAccount.accountInfo);
console.log(myAccount.totalIncome);
console.log(myAccount.totalExpense);
console.log(myAccount.accountBalance);