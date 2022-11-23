class Calculator {
  constructor(prevOperandTextEl, currentOperantTextEl) {
    this.prevOperandTextEl = prevOperandTextEl;
    this.currentOperantTextEl = currentOperantTextEl;
    this.clear();
  }

  clear() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined;
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentOperand === '') return;
    if (this.previousOperand !== '') {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
  }

  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case '+':
        computation = prev + current;
        break;
      case '-':
        computation = prev - current;
        break;
      case '*':
        computation = prev * current;
        break;
      case '/':
        computation = prev / current;
        break;
      default:
        return;
    }

    this.currentOperand = computation.toLocaleString();
    if (this.currentOperand.toLocaleString().length > 17) {
      this.currentOperand = 'long number :(';
    }

    this.operation = undefined;
    this.previousOperand = '';
  }

  updateDisplay() {
    this.currentOperantTextEl.innerText = this.currentOperand;
    if (this.operation != null) {
      this.prevOperandTextEl.innerText = `${this.previousOperand}  ${this.operation}`;
    }
  }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationsButtons = document.querySelectorAll('[data-operation]');
const deleteButton = document.querySelector('[data-delete]');
const equalsButton = document.querySelector('[data-equals]');
const allClearButton = document.querySelector('[data-clear]');
const prevOperandTextEl = document.querySelector('[data-previous-operand ]');
const currentOperantTextEl = document.querySelector('[data-current-operand]');

const calculator = new Calculator(prevOperandTextEl, currentOperantTextEl);

numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationsButtons.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

equalsButton.addEventListener('click', (button) => {
  calculator.compute();
  calculator.updateDisplay();
});

allClearButton.addEventListener('click', (button) => {
  calculator.clear();
  calculator.updateDisplay();
});
deleteButton.addEventListener('click', (button) => {
  calculator.delete();
  calculator.updateDisplay();
});
