/* A promise is an object that represents the completion or failure of an asynchronous operation
        and its resulting value. asynchronous operations  allow your code to execute tasks
        without waiting for each task to complete */

//pending- initial state when the promise is created.
//fulfilled-the state when the async operation is successfully completed
//rejected-the state when the async operation encounters an error or fails.



//promise constructor
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const skills = ["HTML", "CSS", "Javascript"]
        if (skills.length > 0){
            resolve(skills)
        } else {
            reject("Something went wrong")
        }
    }, 3000)
})

promise.then(result => {
    console.log(result);
})
.catch(error => {
    console.log(error);
});


const myPromise = new Promise((resolve, reject) => {
    const names = ["Pauline", "Akinyi", "Oraro"]
    if (names.includes("Hiltra")){
        resolve(names)
    } else {
        reject ("The name is not included");
    }
})
myPromise.then(result => {
    console.log(result);
})
.catch(error => {
    console.log(error);
});


//then() method specifies what should happen when a promise is fulfilled.
//catch() method specifies what should happen when a promise is rejected.
//finally() method specifies a callback that should be executed regardless of whether the promise is fulfilled or rejected.


//Fetch API
//provides an interface for fetching resources
const url = "https://restcountries.com/v2/all";
fetch(url)
    .then(response => response.json()) // accessing the API data as JSON
    .then(data => {
    // getting the data
    console.log(data)
})
    .catch(error => console.error(error));

//async keyword is for a function that is supposed to perform an asynchronous operation.
//await keyword is used inside an async function to pause the execution until a promise is settled.
const catsAPI = 'https://api.thecatapi.com/v1/breeds';
const fetchCatData = async () => {
        try {
            const response = await fetch(catsAPI);
            const cats = await response.json();
            if (cats.length > 0) {
                const catBreed = cats[0].name;
                console.log(catBreed);
            } else {
                console.log('No cat breeds found.');
            }
        } catch (error) {
            console.error('Error fetching cat data:', error);
        }
    };
fetchCatData();