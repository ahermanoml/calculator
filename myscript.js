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

let buttonsArray = Array.from(document.querySelectorAll('.numbers'));
buttonsArray.forEach(function (butt) {
    butt.addEventListener("click", function() {    
        display.innerText += butt.innerText
        if ((display.innerText).includes('*') || (display.innerText).includes('+') || (display.innerText).includes('-') || (display.innerText).includes('/'))
        {
            numb2 = parseInt(display.innerText)
        }
        numb1 = display.innerText;
        console.log(numb1);
        return numb1;
    });
}) 

let operationsArray = Array.from(document.querySelectorAll('.operation'));
operationsArray.forEach(function (butt) {
    butt.addEventListener("click", function() {    
        display.innerText = butt.innerText
        operator = display.innerText;
        console.log(operator);
        return operator;
    });
})


let buttM = document.querySelector('#multiply');

buttM.addEventListener("click", function() {
    operator = buttM.innerText;
    console.log(operator);
    return operator;
});

/*
butt1.addEventListener("click", function() {    
    console.log(numb1);
    display.innerText += one;
    numb1 = display.innerText;
    return numb1;
});

butt2.addEventListener("click", function() {
    numb2 = butt2.innerText;
    console.log(numb2);
    display.innerText += two;
    return numb2;
});
*/





