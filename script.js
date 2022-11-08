//functions to calculate two numbers
const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => (b == 0 ? 0 : a / b);

const modulus = (a, b) => a % b;

//function to operate based on a specific operator
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
    case '%':
      return modulus(a, b);
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
let result = '';
let operator = undefined;
currentOperandTextElement.innerText = 0;
previousOperandTextElement.innerText = 0;

//When pressed a number button executes updateDisplay function
numberButtons.forEach((number) => {
  number.addEventListener('click', updateDisplay);
});

//When pressed an operator button executes handleOperation function
operationButtons.forEach((operator) => {
  operator.addEventListener('click', handleOperation);
});

//When Equal to button is pressed executes toEqualTo function
equalsButton.addEventListener('click', toEqualTo);

function updateDisplay(e) {
  displayValue += e.target.textContent;
  currentOperandTextElement.innerText = displayValue;
}

function handleOperation(e) {
  currentOperandTextElement.innerText = 0;
  operator = e.target.textContent;
  firstNumber = displayValue;
  previousOperandTextElement.innerText = `${displayValue} ${operator}`;
  displayValue = '';
}

function toEqualTo() {
  result = operate(operator, parseInt(firstNumber), parseInt(displayValue));
  currentOperandTextElement.innerText = result;
  previousOperandTextElement.innerText = `${firstNumber} ${operator} ${displayValue}`;
  displayValue = result;
}

allClearButton.addEventListener('click', () => {
  displayValue = '';
  firstNumber = '';
  nextNumber = '';
  operator = '';
  previousOperandTextElement.innerText = 0;
  currentOperandTextElement.innerText = 0;
});
