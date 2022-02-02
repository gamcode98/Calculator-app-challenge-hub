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
      // expression.pop();
      console.log(expression);
      let ban = true;
      let tempValue = "";
      let value = "";
      let operator = "";
      let result = 0;
      let val = "";
      let [...alphabet] = "abcdefghijklmnopqrstuvwxyz";
      // console.log(alphabet);
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
          console.log(val);
          val = "";
        }
      }
      expression.pop();
      operators.pop();
      console.log(operators);
      console.log(numbers);
      expression.splice(0, expression.length);
      expression = numbers;
      let k = 0;
      console.log(expression);
      console.log(numbers.length);
      for (let i = 1; i < numbers.length; i += 2) {
        // console.log("hi");
        // console.log(i);
        expression.splice(i, 0, operators[k]);
        // console.log(k);
        k++;
      }
      console.log("new expression: ", expression);

      for (let i = 0; i < expression.length; i++) {
        console.log(expression[i], i);
        if (expression[i] === "x") {
          console.log(i, expression[i - 1], expression[i + 1]);
          value = Number(expression[i - 1]) * Number(expression[i + 1]);
          expression.splice(i - 1, 2);
          console.log(expression[i - 1]);
          expression[i - 1] = value;
          console.log(expression);
          const found = expression.find((el) => el === "x" || el === "/");
          if (found) {
            i = 0;
          }
        }
        if (expression[i] === "/") {
          console.log(i, expression[i - 1], expression[i + 1]);
          value = Number(expression[i - 1]) / Number(expression[i + 1]);
          expression.splice(i - 1, 2);
          expression[i - 1] = value;
          console.log(expression);
          const found = expression.find((el) => el === "x" || el === "/");
          if (found) {
            i = 0;
          }
        }
      }
      console.log(expression);
      // numbers.splice(0, numbers.length);
      let index = "";
      tempValue = "";
      let isAllNumber = 0;
      let ban2 = true;

      // while (expression.length > 1) {
      console.log("Hi");
      for (let i = 0; i < expression.length; i++) {
        if (ban2) {
          if (expression[i - 1] === "+" || expression[i - 1] === undefined) {
            // tempValue=expression[i];

            // valueSuma += Number(expression[i]);
            expression.push(Number(expression[i]));

            // console.log("pos anterior", i - 1);

            if (expression[i - 1] === undefined) {
              console.log("hiiiii");
              expression.shift();
            } else {
              expression.splice(i - 1, 2);
            }
            // console.log("valueSuma: ", valueSuma);
            console.log("suma: ", expression);

            // const found = expression.find((el) => el === "+");
            // if (found) {
            //   i = 0;
            // }
          }
        }

        // expression[i] = value;
        console.log("index: ", i);
        // value = Number(expression[i - 1]) + Number(expression[i + 1]);
        // if (expression[i] === "+") {
        //   console.log("suma");
        //   console.log(i, expression[i - 1], " + ", expression[i + 1]);
        //   value = Number(expression[i - 1]) + Number(expression[i + 1]);
        //   expression.splice(i - 1, 2);
        //   expression[i - 1] = value;
        // }

        // if (expression[i] === "-") {
        //   console.log("resta");
        //   console.log(i, expression[i - 1], " - ", expression[i + 1]);
        //   value = Number(expression[i - 1]) - Number(expression[i + 1]);
        //   expression.splice(i - 1, 2);
        //   expression[i - 1] = value;
        // }
        if (expression[i - 1] === "-") {
          console.log("resta");
          // console.log(i, expression[i - 1], " - ", expression[i + 1]);
          expression.push(Number(expression[i]) * -1);

          // valueResta -= Number(expression[i]);
          // console.log("valueResta: ", valueResta);
          expression.splice(i - 1, 2);
          console.log("resta: ", expression);
          // expression[i - 1] = value;
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
        console.log("isAllNumber: ", isAllNumber);
        console.log("expression.length: ", expression.length);
        if (isAllNumber === expression.length) {
          ban2 = false;
        } else {
          isAllNumber = 0;
          console.log("mmmmmm");
        }
      }

      for (let k = 0; k < expression.length; k++) {
        result += expression[k];
      }
      //   }
      // }
      console.log(expression);

      // for (let i = 0; i < expression.length; i++) {
      //   if (
      //     expression[i] !== "+" &&
      //     expression[i] !== "-" &&
      //     expression[i] !== "x" &&
      //     expression[i] !== "/"
      //   ) {
      //     value += expression[i];
      //   } else {
      //     operator = expression[i];
      //     tempValue = value;
      //     value = "";
      //     if (!ban) {
      //       tempValue = result;
      //     }
      //     console.log("tempValue: ", tempValue);
      //     console.log("operator: ", operator);
      //     console.log("******************************");
      //   }
      //   if (operator === "x" || operator === "/") {
      //     console.log("hi");
      //   } else {
      //     if (operator === "+") {
      //       console.log("SUMA");
      //       // console.log("value: ", value);
      //       // console.log("tempValue: ", tempValue);
      //       result = Number(tempValue) + Number(value);
      //       console.log("suma", result);
      //       console.log("******************************");
      //       ban = false;
      //     }
      //     if (operator === "-") {
      //       result = Number(tempValue) - Number(value);
      //       console.log("resta", result);
      //       ban = false;
      //     }
      //     if (operator === "x") {
      //       result = Number(tempValue) * Number(value);
      //       console.log("producto", result);
      //       ban = false;
      //     }
      //     if (operator === "/") {
      //       result = Number(tempValue) / Number(value);
      //       console.log("division", result);
      //       ban = false;
      //     }
      //   }
      // }
      // console.log(operator);
      console.log("expression: ", expression);
      // $inputNumber.value = expression.join("");
      $inputNumber.value = result;
    }
  });
});
