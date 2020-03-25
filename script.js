let numb1;
let numb2;
let result;
let calcBtn;
let total;
let memoryBtn;
let memoryArray = [];
let display = document.getElementById("output-display");

let keys = document.getElementById('all-keys');
keys.addEventListener('click', (e) => {
    const target = e.target;
    if(!target.matches('button')) {
        return;
    } else if(target.classList.contains("std-btn")) {
        getNumber(target.value);
        setNumbers(display.value);
        return;
    } else if(target.classList.contains('calc-btn')) {
        getOperator(target, result);
        return;
    } else if(target.classList.contains('decimal')) {
        getDecimal(target.value, calcBtn);
        return;
    } else if(target.classList.contains('clear-btn')) {
        clearEverything();
        return;
    } else if(target.classList.contains('equal-btn')) {
        calculateTotal();
        return;
    } else if(target.classList.contains("memory-btn")) {
        allMemoryButtonFunctionality(target);
    }
    
});

function getNumber(target) {
    if(display.value === "" || display.value === calcBtn) {
        display.value = target;   
    } else if(parseFloat(display.value) === result) {
        display.value = target;
    } else {
        display.value += target; 
    }
 };

 function getDecimal(dmal, cBtn) {
    if(display.value === cBtn) {
        display.value = dmal;
    } else if(dmal === ".") {
        display.value += dmal;
    }
}

function getOperator(target) {
    if(numb1 !== null && numb2 !== null && calcBtn !== undefined) {
        calculateTotal();
        calcBtn = target.value;
    } else if (target.className === "calc-btn") {
        calcBtn = target.value;
        display.value = calcBtn;
    }
}

function setNumbers(display) {
    let userValue = display;
    if(result !== undefined) {
        numb1 = result;
        numb2 = parseFloat(userValue);
    } else if(calcBtn === undefined) {
        numb1 = parseFloat(userValue);
    } else if (numb1 !== null && calcBtn !== undefined) {
        numb2 = parseFloat(userValue);
    }
}
  
function calculateTotal() {
    switch(calcBtn) {
        case "+":
            total = numb1 + numb2;
            display.value = +total.toFixed(3);
            result = total;
            break;

        case "-":
            total = numb1 - numb2;
            display.value = +total.toFixed(3);
            result = total;
            break;

        case "x":
            total = numb1 * numb2;
            display.value = +total.toFixed(3);
            result = total;
            break;

        case "/":
            total = numb1 / numb2;
            display.value = +total.toFixed(3);
            result = total;
            break;
    }
}

function allMemoryButtonFunctionality(mBtn) {
    memoryBtn = mBtn.value;
    switch(memoryBtn) {
        case "M+":
            memoryArray.push(parseFloat(display.value));
            console.log(memoryArray);  
            break;

        case "M-":
            memoryArray.pop(display.value);
            console.log(memoryArray);  
            break;

        case "MR":

        case "MC":
    }
}

function clearEverything() {
    display.value = "";
    numb1 = null;
    numb2 = null;
    result = undefined;
    calcBtn = undefined;
}