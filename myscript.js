// ADD NUMBERS INPUT

function add(a, b) {
    return Number(a) + Number(b);
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b == 0) {
        alert ("Don't go this way buddy");
    } else {
        return a / b;
    }

}

let numb1;
let numb2;
let operator;

function operate () {
    switch (operator) {
        case "+":
        return add(numb1, numb2);
        break;
        case "-":
        return subtract(numb1, numb2);
        break;
        case "*":
        return multiply(numb1, numb2);
        break;
        case "/":
        return divide(numb1, numb2);
        break;
        default:
        alert("Something went wrong");
    }
}


let operationsDisplay = document.querySelector('#operationsDisplay');
let resultDisplay = document.querySelector('#resultDisplay');


let buttonsArray = Array.from(document.querySelectorAll('.numbers'));
buttonsArray.forEach(function (butt) {
    butt.addEventListener("click", function() {
        operationsDisplay.innerText = operationsDisplay.innerText.replace(/[*+/-]/g, '');    
        operationsDisplay.innerText += butt.innerText
    });
}) 

let operationsArray = Array.from(document.querySelectorAll('.operation'));
operationsArray.forEach(function (butt) {
    butt.addEventListener("click", function() {
        if (numb1 === undefined) {
        numb1 = operationsDisplay.innerText;
        operationsDisplay.innerText = butt.innerText;
        operator = operationsDisplay.innerText;
        console.log(operator);
        } else {
            numb2 = operationsDisplay.innerText;
            let result = operate();
            numb1 = result;
            operationsDisplay.innerText = butt.innerText;
            resultDisplay.innerText = result;
            operator = operationsDisplay.innerText;
            console.log(operator);
        } 
    });
})

let equalSign = document.querySelector('#equalSign');
equalSign.addEventListener("click", function() {
    numb2 = operationsDisplay.innerText;
    let result = operate();
    resultDisplay.innerText = result;
})

let clear = document.querySelector('#clear');
clear.addEventListener("click", function (){
    operationsDisplay.innerText = "";
    resultDisplay.innerText = "";
    numb1 = undefined;
    numb2 = undefined;
    operator = undefined;
})

/*
butt1.addEventListener("click", function() {    
    console.log(numb1);
    operationsDisplay.innerText += one;
    numb1 = operationsDisplay.innerText;
    return numb1;
});

butt2.addEventListener("click", function() {
    numb2 = butt2.innerText;
    console.log(numb2);
    operationsDisplay.innerText += two;
    return numb2;
});
*/





