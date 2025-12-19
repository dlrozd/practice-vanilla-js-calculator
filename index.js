// data

const buttonAddition = document.getElementById( 'buttonAddition');
const buttonSubstraction = document.getElementById( 'buttonSubstraction');
const buttonMultiply = document.getElementById( 'buttonMultiplication');
const buttonDivision = document.getElementById( 'buttonDivision');

let inputNumber1 = document.getElementById('input-number-1');
let inputNumber2 = document.getElementById('input-number-2');

const operationButtons = [buttonAddition, buttonSubstraction, buttonMultiply, buttonDivision]

// logic

function makeOperation (operation) {
    let number1 = Number(inputNumber1.value);
    let number2 = Number(inputNumber2.value);
    let result = null;

    if (operation === '+') {
        result = number1 + number2;
    } else if (operation === '-') {
        result = number1 - number2;
    } else if (operation === '*') {
        result = number1 * number2;
    } else if (operation === '/') {
        result = number1 / number2;
    } else {
        return alert('Please select an operation');
    }

    return alert(result);
}

function buttonOperationClick (eventObject) {
    let clickedElement = eventObject.currentTarget;
    let operation = clickedElement.innerHTML;
    makeOperation(operation);
}

for (let i = 0; i < operationButtons.length; i++) {
    operationButtons[i].addEventListener('click', buttonOperationClick);
}



