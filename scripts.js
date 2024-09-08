let number1;
let operator;
let number2;
let displayNumbers = document.querySelector("#display-numbers");

function add(num1, num2) {
    console.log(num1 + num2);
}

function subtract(num1, num2) {
    console.log(num1 - num2);
}

function multiply(num1, num2) {
    console.log(num1 * num2);
}

function divide(num1, num2) {
    console.log(num1 / num2);
}

function operate(operator, num1, num2) {
    switch(operator) {
        case "+": {
            add(num1, num2);
            break;
        }
        case "-": {
            subtract(num1, num2);
            break;
        }
        case "*": {
            multiply(num1, num2);
            break;
        }
        case "/": {
            divide(num1, num2);
            break;
        }
    }
}

const numericButtons = document.querySelectorAll("#button-number");
numericButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        displayNumbers.textContent += event.target.textContent;
    });
});

const operatorButtons = document.querySelectorAll("#button-operator");
operatorButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        if (operator === undefined) {
            number1 = parseInt(displayNumbers.textContent);
            displayNumbers.textContent = "";
            operator = event.target.textContent;
        }
    });
});