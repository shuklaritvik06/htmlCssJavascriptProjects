class Calculator {
  constructor(previousOperand, currentOperand) {
    this.previousOperandElement = previousOperand;
    this.currentOperandElement = currentOperand;
    this.clear();
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  deleteOne() {
    this.currentOperand = this.currentOperand.slice(0, -1);
  }

  append(number) {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentOperand === "") return;
    if (this.previousOperand !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  updateOutputScreen() {
    this.currentOperandElement.innerText = this.currentOperand;
    if (this.operation != undefined) {
      this.previousOperandElement.innerText = `${this.previousOperand}${this.operation}`;
    } else {
      this.previousOperandElement.innerText = this.previousOperand;
    }
  }

  compute() {
    let computed;
    switch (this.operation) {
      case "+":
        computed =
          parseFloat(this.previousOperand) + parseFloat(this.currentOperand);
        break;
      case "-":
        computed =
          parseFloat(this.previousOperand) - parseFloat(this.currentOperand);
        break;
      case "*":
        computed =
          parseFloat(this.previousOperand) * parseFloat(this.currentOperand);
        break;
      case "÷":
        computed =
          parseFloat(this.previousOperand) / parseFloat(this.currentOperand);
        break;
      default:
        return;
    }
    this.currentOperand = computed;
    this.operation = undefined;
    this.previousOperand = "";
  }
}

const buttons = document.querySelectorAll("[data-number]");
const operators = document.querySelectorAll("[data-operation]");
const equals = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-all-delete]");
const clear = document.querySelector("[data-clear]");
const previousOperandElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandElement = document.querySelector("[data-current-operand]");

const calculator = new Calculator(
  previousOperandElement,
  currentOperandElement
);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.append(button.innerText);
    calculator.updateOutputScreen();
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    calculator.chooseOperation(operator.innerText);
    calculator.updateOutputScreen();
  });
});

clear.addEventListener("click", () => {
  calculator.deleteOne();
  calculator.updateOutputScreen();
});

deleteButton.addEventListener("click", () => {
  calculator.clear();
  calculator.updateOutputScreen();
});

equals.addEventListener("click", () => {
  calculator.compute();
  calculator.updateOutputScreen();
});
