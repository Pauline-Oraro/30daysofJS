

function calculateTip (){
    let amount = document.getElementById("amount").value;
    let persons = document.getElementById("persons").value;
    let service = document.getElementById("services").value;

    if(amount === "" && service === "select"){
        alert("Please enter valid values");
        return;
    }

    if(persons === ""){
        alert("Please enter the number of persons");
    }

    if(persons === "1"){
    document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }

    let total = (amount * service) / persons;
    total = total.toFixed(2);

    document.getElementById("total").innerHTML = total;
}