let numb1;
let numb2;
let calcBtn;
let total;
let display = document.getElementById("output-display");
const getNumButtons = document.querySelectorAll(".std-btn");
const getOperatorButtons = document.querySelectorAll(".calc-btn");
const clearButton = document.getElementById("clear-btn").addEventListener("click", clearEverything);
const equalButton = document.getElementById("equalBtn").addEventListener("click", calculateTotal);

getNumButtons.forEach(function (button) {
    button.addEventListener("click", function(e) {
        if(display.innerText === "" || display.innerText === calcBtn) {
            display.innerText = e.target.value;
        } else{
            display.innerText = display.innerText + e.target.value; 
        }
    })
});

getOperatorButtons.forEach(function(opBtn) {
    opBtn.addEventListener("click", function(e) {
        if (e.target.className === "calc-btn") {
            calcBtn = e.target.value;
            display.innerText = calcBtn;
        }
    })
});

function setNumbers() {
    let userValue = display.innerText;
    if(calcBtn === undefined) {
        numb1 = parseFloat(userValue);
    } else if (numb1 !== null && calcBtn !== undefined) {
        numb2 = parseFloat(userValue);
    }
}

function calculateTotal() {
    switch(getOperatorButtons) {
        case "+":
            total = numb1 + numb2;
            display.innerText = total;
            break;

        case "-":
            total = numb1 - numb2;
            display.innerText = total;
            break;

        case "*":
            total = numb1 * numb2;
            display.innerText = total;
            break;

        case "/":
            total = numb1 / numb2;
            display.innerText = total;
            break;
    }
}


function clearEverything(e) {
    if(e.target.className === "clear-btn") {
        document.getElementById("output-display").innerHTML = "";
    }
}
