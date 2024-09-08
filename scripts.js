let number1;
let operator;
let number2;
let displayNumbers = document.querySelector("#display-numbers");

function add(num1, num2) {
    const result = num1 + num2;
    displayNumbers.textContent = result;
    number1 = result;
    operator = undefined;
}

function subtract(num1, num2) {
    const result = num1 - num2;
    displayNumbers.textContent = result;
    number1 = result;
    operator = undefined;
}

function multiply(num1, num2) {
    const result = num1 * num2;
    displayNumbers.textContent = result;
    number1 = result;
    operator = undefined;
}

function divide(num1, num2) {
    if (num2 === 0) {
        displayNumbers.textContent = "ERR0R ☠️";
        return;
    }
    const result = num1 / num2;
    displayNumbers.textContent = result;
    number1 = result;
    operator = undefined;
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
            if (isNaN(number1)) return;
            displayNumbers.textContent = "";
            operator = event.target.textContent;
        }
    });
});

const equalsButton = document.querySelector("#button-equals");
equalsButton.addEventListener("click", () => {
    if(displayNumbers.textContent === ""
        || number1 === undefined
        || operator === undefined
    ) return;
    number2 = parseInt(displayNumbers.textContent);
    operate(operator, number1, number2);
});

const clearButton = document.querySelector("#button-clear");
clearButton.addEventListener("click", (event) => {
    number1 = undefined;
    operator = undefined;
    number2 = undefined;
    displayNumbers.textContent = undefined;
});

document.addEventListener("keydown", (event) => {
    const key = event.key;
    switch (key) {
        case "Backspace": {
            if (displayNumbers.textContent.length > 0) {
                const newString = displayNumbers.textContent.slice(0, -1);
                displayNumbers.textContent = newString;
            }
            break;
        }
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":    
        case "7":
        case "8":
        case "9": {
            displayNumbers.textContent += key;
            break;
        }
    }
})