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
      // let expression = $inputNumber.value.split("");
      let [...expression] = $inputNumber.value;

      // const isOperator = (el) => el === "+" || el === "-";
      // let index = expression.findIndex(isOperator);
      // let value1 = expression.slice(0, index);
      // let value2 = expression.slice(index + 1, expression.length - 1);
      // value1 = Number(value1.join(""));
      // value2 = Number(value2.join(""));
      // if (expression[index] === "+") $inputNumber.value = value1 + value2;
      // if (expression[index] === "-") $inputNumber.value = value1 - value2;
      expression.pop();
      console.log(expression);
      let ban = true;
      let tempValue = "";
      let value = "";
      let operator = "";
      let result = "";
      for (let i = 0; i < expression.length; i++) {
        if (
          expression[i] !== "+" &&
          expression[i] !== "-" &&
          expression[i] !== "x" &&
          expression[i] !== "/"
        ) {
          value += expression[i];
        } else {
          operator = expression[i];
          tempValue = value;
          value = "";
          if (!ban) {
            tempValue = result;
          }
          //  else {
          //   ban = true;
          // }
          console.log("tempValue: ", tempValue);
          console.log("operator: ", operator);
          console.log("******************************");
        }
        if (operator === "+") {
          console.log("SUMA");
          // console.log("value: ", value);
          // console.log("tempValue: ", tempValue);
          result = Number(tempValue) + Number(value);
          console.log("suma", result);
          console.log("******************************");
          ban = false;
        }
        if (operator === "-") {
          result = Number(tempValue) - Number(value);
          console.log("resta", result);
          ban = false;
        }
        if (operator === "x") {
          result = Number(tempValue) * Number(value);
          console.log("producto", result);
          ban = false;
        }
        if (operator === "/") {
          result = Number(tempValue) / Number(value);
          console.log("division", result);
          ban = false;
        }
      }
      $inputNumber.value = result;
    }
  });
});
