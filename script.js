let numb;
let sum;
let total;
const button = document.querySelector("#calc-body div").addEventListener("click", getUserInputs);

function calculatorApp(e) {
    getUserInputs();
    clearEverything();
}

function getUserInputs(e) {
    if(e.target.className === "std-btn") {
        numb = parseInt(e.target.value);
        document.getElementById("output-display").innerHTML = numb; 
    }
}


function clearEverything(e) {
    if(e.target.className === "clear-btn") {
        document.getElementById("output-display").innerHTML = "";
    }
}