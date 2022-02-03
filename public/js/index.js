const d = document;
const $btns = d.querySelectorAll(".btn");
const $inputNumber = d.getElementById("input-number");
$btns.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    let number = el.textContent;
    $inputNumber.value += number;

    if (el.textContent === "DEL") {
      let expression = $inputNumber.value.split("");
      expression.splice(expression.length - 4, 4);
      $inputNumber.value = expression.join("");
    }
    if (el.textContent === "RESET") {
      $inputNumber.value = "";
    }
    if (el.textContent === "=") {
      let [...expression] = $inputNumber.value;
      let value = "";
      let operator = "";
      let result = 0;
      let val = "";
      let numbers = [];
      let operators = [];
      for (let i = 0; i < expression.length; i++) {
        if (
          expression[i] !== "+" &&
          expression[i] !== "-" &&
          expression[i] !== "x" &&
          expression[i] !== "/" &&
          expression[i] !== "="
        ) {
          val += expression[i];
        } else {
          operator = expression[i];
          operators.push(operator);
          numbers.push(val);
          val = "";
        }
      }
      expression.pop();
      operators.pop();

      expression.splice(0, expression.length);
      expression = numbers;
      let k = 0;

      for (let i = 1; i < numbers.length; i += 2) {
        expression.splice(i, 0, operators[k]);
        k++;
      }

      for (let i = 0; i < expression.length; i++) {
        if (expression[i] === "x") {
          value = Number(expression[i - 1]) * Number(expression[i + 1]);
          expression.splice(i - 1, 2);
          expression[i - 1] = value;
          const found = expression.find((el) => el === "x" || el === "/");
          if (found) {
            i = 0;
          }
        }
        if (expression[i] === "/") {
          value = Number(expression[i - 1]) / Number(expression[i + 1]);
          expression.splice(i - 1, 2);
          expression[i - 1] = value;
          const found = expression.find((el) => el === "x" || el === "/");
          if (found) {
            i = 0;
          }
        }
      }
      let index = "";
      tempValue = "";
      let isAllNumber = 0;
      let ban2 = true;

      for (let i = 0; i < expression.length; i++) {
        if (ban2) {
          if (expression[i - 1] === "+" || expression[i - 1] === undefined) {
            expression.push(Number(expression[i]));

            if (expression[i - 1] === undefined) {
              expression.shift();
            } else {
              expression.splice(i - 1, 2);
            }
          }
        }

        if (expression[i - 1] === "-") {
          expression.push(Number(expression[i]) * -1);
          expression.splice(i - 1, 2);
        }
        const found = expression.find((el) => el === "-" || el === "+");
        if (found) {
          i = 0;
        }
        for (let j = 0; j < expression.length; j++) {
          if (typeof expression[j] === "number") {
            isAllNumber++;
          }
        }
        if (isAllNumber === expression.length) {
          ban2 = false;
        } else {
          isAllNumber = 0;
        }
      }

      for (let k = 0; k < expression.length; k++) {
        result += expression[k];
      }
      $inputNumber.value = result;
    }
  });
});
