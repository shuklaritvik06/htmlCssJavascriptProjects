"use strict";
const inputArea = document.getElementById("input");
const outputArea = document.getElementById("output");
const equalBtn = document.getElementById("equalBtn");
let result = [];
let myStack = [];
let temp = [];
let i = 0;
let j = 0;
function precedence(b) {
  if (b === "+" || b === "-") {
    return 1;
  }
  if (b === "*" || b === "/") {
    return 2;
  }
  if (b === undefined) {
    return 0;
  }
}

function isOperator(a) {
  if (a === "+" || a === "-" || a === "*" || a === "/") {
    return true;
  } else {
    return false;
  }
}

function infixToPostfix(expression) {
  while (i < expression.length) {
    if (!isOperator(expression[i])) {
      temp.push(expression[i]);
      i++;
    } else {
      if (precedence(expression[i]) > precedence(myStack[myStack.length - 1])) {
        myStack.push(expression[i]);
      } else {
        while (
          precedence(expression[i]) <= precedence(myStack[myStack.length - 1])
        ) {
            temp.push(myStack.pop());
        }
        myStack.push(expression[i]);
      }
      i++;
    }
  }
  while (myStack.length > 0) {
    temp.push(myStack.pop());
  }

  return temp;
}

function postfixEvaluation(postfix) {
  let stack = [];
  for (let i = 0; i < postfix.length; i++) {
    if (!isOperator(postfix[i])) {
      stack.push(postfix[i]);
    } else {
      let a = stack.pop();
      let b = stack.pop();
      if (postfix[i] === "+") {
        stack.push(Number(a) + Number(b));
      } else if (postfix[i] === "-") {
        stack.push(Number(b) - Number(a));
      } else if (postfix[i] === "*") {
        stack.push(Number(a) * Number(b));
      } else if (postfix[i] === "/") {
        stack.push(Number(b) / Number(a));
      }
    }
  }
  return stack.pop();
}

equalBtn.addEventListener("click", function () {
  const inputExpression = inputArea.value;
  const postFix = infixToPostfix(inputExpression);
  const answer = postfixEvaluation(postFix);
  console.log(answer)
  outputArea.innerHTML = answer;
});
