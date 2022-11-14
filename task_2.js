class Calculator {
  constructor(firstNumber, secondNumber) {
    if (arguments.length > 2) {
      throw new Error();
    }

    this.setX(firstNumber);
    this.setY(secondNumber);
  }

  isInvalidNumber(number) {
    if (isNaN(number)) {
      return true;
    }
  }

  setX(number) {
    if (this.isInvalidNumber(number)) {
      throw new Error();
    }

    this.firstNumber = number;
  }

  setY(number) {
    if (this.isInvalidNumber(number)) {
      throw new Error();
    }

    this.secondNumber = number;
  }

  getSum = () => {
    console.log(this.firstNumber + this.secondNumber);
  };

  getMul = () => {
    console.log(this.firstNumber * this.secondNumber);
  };

  getSub = () => {
    console.log(this.firstNumber - this.secondNumber);
  };

  getDiv = () => {
    if (this.secondNumber === 0) {
      throw new Error();
    }

    console.log(this.firstNumber / this.secondNumber);
  };
}

const calculator = new Calculator(12, 3);
calculator.getSum();
calculator.getDiv();
