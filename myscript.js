function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
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

let display = document.querySelector('#display')

let butt1 = document.querySelector('#one');
let one = butt1.innerText;


let butt2 = document.querySelector('#two');
let two = butt2.innerText;

let buttM = document.querySelector('#multiply');



butt1.addEventListener("click", function() {
    numb1 = butt1.innerText;
    console.log(numb1);
    display.innerText += one;
    return numb1;
});

butt2.addEventListener("click", function() {
    numb2 = butt2.innerText;
    console.log(numb2);
    display.innerText += two;
    return numb2;
});

buttM.addEventListener("click", function() {
    operator = buttM.innerText;
    console.log(operator);
    return operator;
});




