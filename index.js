const buttonAddition = document.getElementById( 'buttonAddition');
const buttonSubstraction = document.getElementById( 'buttonSubstraction');
const buttonMultiply = document.getElementById( 'buttonMultiplication');
const buttonDivision = document.getElementById( 'buttonDivision');
// const calculateBtn = document.getElementById('calculate');
// const resultDisplay = document.getElementById('result');

// let selectedOperation = null;

// function setAddition() { selectedOperation = '+'; }
// function setSubtraction() { selectedOperation = '-'; }
// function setMultiply() { selectedOperation = '*'; }
// function setDivision() { selectedOperation = '/'; }

function buttonAdditionClick () {
    let inputNumber1 = document.getElementById('input-number-1');
    let inputNumber2 = document.getElementById('input-number-2');
    let number1 = Number(inputNumber1.value);
    let number2 = Number(inputNumber2.value);
    return alert(number1 + number2);
}
function buttonSubtractionClick () {
    let inputNumber1 = document.getElementById('input-number-1');
    let inputNumber2 = document.getElementById('input-number-2');
    let number1 = Number(inputNumber1.value);
    let number2 = Number(inputNumber2.value);
    return alert(number1 - number2);

}
function buttonMultiplyClick () {
    let inputNumber1 = document.getElementById('input-number-1');
    let inputNumber2 = document.getElementById('input-number-2');
    let number1 = Number(inputNumber1.value);
    let number2 = Number(inputNumber2.value);
    return alert(number1 * number2);
}
function buttonDivisionClick () {
    let inputNumber1 = document.getElementById('input-number-1');
    let inputNumber2 = document.getElementById('input-number-2');
    let number1 = Number(inputNumber1.value);
    let number2 = Number(inputNumber2.value);
    return alert(number1 / number2);
}



buttonAddition.addEventListener('click', buttonAdditionClick);
buttonSubstraction.addEventListener('click', buttonSubtractionClick);
buttonMultiply.addEventListener('click', buttonMultiplyClick);
buttonDivision.addEventListener('click', buttonDivisionClick);


