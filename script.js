let numb1;
let numb2;
let calcBtn;
let total;
let display = document.getElementById("output-display");
let decimalButton = document.getElementById("decimal-btn");
const getNumButtons = document.querySelectorAll(".std-btn");
const setOperatorButtons = document.querySelectorAll(".calc-btn");
const setNumbers = document.querySelectorAll(".std-btn");
const clearButton = document.getElementById("clear-btn").addEventListener("click", clearEverything);
const equalButton = document.getElementById("equalBtn").addEventListener("click", calculateTotal);

getNumButtons.forEach(function (button) {
    button.addEventListener("click", function(e) {
        if(display.value === "" || display.value === calcBtn) {
            display.value = e.target.value;   
        } else if(e.target.value === ".") {
            display.value += e.target.value;
            decimalButton.value = ""; 
        }else {
            display.value += e.target.value; 
        }
    })
});

setOperatorButtons.forEach(function(opBtn) {
    opBtn.addEventListener("click", function(e) {
        if (e.target.className === "calc-btn") {
            calcBtn = e.target.value;
            display.value = calcBtn;
            if(display.value === calcBtn) {
                decimalButton.value = ".";
            }
        } else if(numb1 !== null && numb2 !== undefined && calcBtn !== undefined) {
            calculateTotal(numb1, numb2, calcBtn);
        }
    })
});

setNumbers.forEach(function (e) {
    e.addEventListener("click", function() {
        let userValue = display.value;
        if(calcBtn === undefined) {
            numb1 = parseFloat(userValue);
        } else if (numb1 !== null && calcBtn !== undefined) {
            numb2 = parseFloat(userValue);
        }
    })
}); 
  
function calculateTotal(e) {
    switch(calcBtn) {
        case "+":
            total = numb1 + numb2;
            display.value = +total.toFixed(3);
            numb1 = total;
            break;

        case "-":
            total = numb1 - numb2;
            display.value = +total.toFixed(3);
            numb1 = total;
            break;

        case "x":
            total = numb1 * numb2;
            display.value = +total.toFixed(3);
            numb1 = total;
            break;

        case "/":
            total = numb1 / numb2;
            display.value = +total.toFixed(3);
            numb1 = total;
            break;
    }
}

function clearEverything() {
    display.value = "";
    numb1 = null;
    numb2 = null;
    calcBtn = undefined;
    decimalButton.value = ".";
}