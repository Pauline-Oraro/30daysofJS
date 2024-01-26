let counter = 0;

const counterValue = document.getElementById("counterValue");
const incrementButton = document.getElementById("incrementButton");
const decrementButton = document.getElementById("decrementButton");
const resetButton = document.getElementById("resetButton");

incrementButton.addEventListener("click", function() {
    counter++;
    counterValue.innerHTML = counter;
});

decrementButton.addEventListener("click", function() {
    counter--;
    counterValue.innerHTML = counter;
});

resetButton.addEventListener("click", function(){
    counter = 0;
    counterValue.innerHTML = counter;
})