//classes are a template for creating objects


class FirstPerson{
    constructor(firstName, middleName, lastName){
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
    }
}

const myPerson = new FirstPerson("Mary","Atieno", "Oduor");
console.log(myPerson);
const myPersonTwo = new FirstPerson("Pauline", "Akinyi", "Oraro");
console.log(myPersonTwo);
const myPersonThree = new FirstPerson("Gilbert", "Oraro", "Oraro");
console.log(myPersonThree);


class User{
    constructor(firstName, lastName, age, occupation){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.occupation = occupation;
    }
    getFullName(){
        return this.firstName + " " + this.lastName;
    }
}
const firstUser =  new User("Kate", "Miles", 33, "Fashion designer");
console.log(firstUser);
console.log(firstUser.getFullName());
const secondUser = new User("Melvin", "Richards", 22, "Civil engineer");
console.log(secondUser);
console.log(secondUser.getFullName());

//default values 
class SecondUser{
    constructor(
        firstName = "Peter",
        lastName = "Kevins",
        age = 30,
        occupation = "Electrician"
    ){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.occupation = occupation;
    }
}

const myUser = new SecondUser();
console.log(myUser);
const myUserTwo = new SecondUser("Melon", "Davis", 34, "Interior design");
console.log(myUserTwo);