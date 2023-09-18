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

function operate (numb1, numb2, operator) {
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
        alert("Somethign went wrong");
    }
}