const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => (b == 0 ? 0 : a / b);

function operate(operator, a, b) {
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
  }
}

const previousOperandTextElement = document.querySelector('.previous-operand');
const currentOperandTextElement = document.querySelector('.current-operand');
const numberButtons = document.querySelectorAll('.number-button');
const operationButtons = document.querySelectorAll('.operation-button');
const allClearButton = document.querySelector('.all-clear-button');
const deleteButton = document.querySelector('.delete-button');
const decimalButton = document.querySelector('.decimal-button');
const equalsButton = document.querySelector('.equals-button');

let displayValue = '';
let firstNumber = '';
let nextNumber = '';
let result = '';
let operator = undefined;
let isOperatorPressed = false;

numberButtons.forEach((number) => {
  number.addEventListener('click', updateDisplay);
});

function updateDisplay(e) {
  displayValue = currentOperandTextElement.innerText += e.target.textContent;
  firstNumber = previousOperandTextElement.innerText.replace(/\D/g, '');
  nextNumber = currentOperandTextElement.innerText;
}

operationButtons.forEach((operator) => {
  operator.addEventListener('click', handleOperation);
});

function handleOperation(e) {
  previousOperandTextElement.innerText += displayValue += e.target.textContent;
  operator = e.target.textContent;
  currentOperandTextElement.innerText = '';
}

equalsButton.addEventListener('click', () => {
  result = operate(operator, firstNumber, nextNumber);
  previousOperandTextElement.innerText += displayValue;
  currentOperandTextElement.innerText = '';
  currentOperandTextElement.innerText += result;
  previousOperandTextElement.innerHTML = '';
  previousOperandTextElement.innerText += firstNumber += operator += nextNumber;
});

allClearButton.addEventListener('click', () => {
  firstNumber = '';
  nextNumber = '';
  operator = '';
  previousOperandTextElement.innerText = '';
  currentOperandTextElement.innerText = '';
});
