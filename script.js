let numb1;
let numb2;
let calcBtn;
let total;
let display = document.getElementById("output-display");
const getNumButtons = document.querySelectorAll(".std-btn");
const decimalButton = document.getElementById("decimal-btn");
const setNumbers = document.querySelectorAll(".std-btn");
const getOperatorButtons = document.querySelectorAll(".calc-btn");
const clearButton = document.getElementById("clear-btn").addEventListener("click", clearEverything);
const equalButton = document.getElementById("equalBtn").addEventListener("click", calculateTotal);

getNumButtons.forEach(function (button) {
    button.addEventListener("click", function(e) {
        if(display.innerText === "" || display.innerText === calcBtn) {
            display.innerText = e.target.value;   
        } else if(e.target.value === ".") {
            display.innerText += e.target.value;
            decimalButton.value = ""; 
        }else {
            display.innerText += e.target.value; 
        }
    })
});

getOperatorButtons.forEach(function(opBtn) {
    opBtn.addEventListener("click", function(e) {
        if (e.target.className === "calc-btn") {
            calcBtn = e.target.value;
            display.innerText = calcBtn;
            if(display.innerText === calcBtn) {
                decimalButton.value = ".";
            }
        }
    })
});

setNumbers.forEach(function (e) {
    e.addEventListener("click", function() {
        let userValue = display.innerText;
        if(calcBtn === undefined) {
            numb1 = parseFloat(userValue);
        } else if (numb1 !== null && calcBtn !== undefined) {
            numb2 = parseFloat(userValue);
        }
    })
}); 
  
function calculateTotal(e) {
    if(e.target.value === "=") {
        decimalButton.value = ".";
    }
    switch(calcBtn) {
        case "+":
            total = numb1 + numb2;
            display.innerText = +total.toFixed(3);
            numb1 = total;
            break;

        case "-":
            total = numb1 - numb2;
            display.innerText = +total.toFixed(3);
            numb1 = total;
            break;

        case "x":
            total = numb1 * numb2;
            display.innerText = +total.toFixed(3);
            numb1 = total;
            break;

        case "/":
            total = numb1 / numb2;
            display.innerText = +total.toFixed(3);
            numb1 = total;
            break;
    }
}

function clearEverything() {
    document.getElementById("output-display").innerHTML = "";
    numb1 = null;
    numb2 = null;
    calcBtn = undefined;
}
