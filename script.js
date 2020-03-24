let numb1;
let numb2;
let calcBtn;
let total;
let display = document.getElementById("output-display");

let keys = document.getElementById('all-keys');
keys.addEventListener('click', (e) => {
    const target = e.target;
    if(!target.matches('button')) {
        return;
    } else if(target.classList.contains('calc-btn')) {
        getOperator(target);
        return;
    } else if(target.classList.contains('decimal')) {
        getDecimal(target.value);
        return;
    } else if(target.classList.contains('clear-btn')) {
        clearEverything();
        return;
    } else if(target.classList.contains('equal-btn')) {
        calculateTotal();
        return;
    } else if(target.classList.contains("std-btn")) {
        getNumber(target.value);
        setNumbers(display.value);
        return;
    }
    
});

function getNumber(target) {
    if(display.value === "" || display.value === calcBtn) {
        display.value = target;   
    } else {
        display.value += target; 
    }
 };

function getDecimal(decimal) {
    if(decimal === ".") {
        display.value += decimal;
    }
}

function getOperator(target) {
    if(numb1 !== null && numb2 !== null && calcBtn !== undefined) {
        calculateTotal();
    } else if (target.className === "calc-btn") {
        calcBtn = target.value;
        display.value = calcBtn;
    }
}

function setNumbers(display) {
    let userValue = display;
    if(calcBtn === undefined) {
        numb1 = parseFloat(userValue);
        console.log(numb1);
    } else if (numb1 !== null && calcBtn !== undefined) {
        numb2 = parseFloat(userValue);
        console.log(numb2);
    }
}
  
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
    calcBtn =undefined;
}