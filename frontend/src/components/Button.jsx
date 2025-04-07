import React from "react";
import "./button.css";
import PerformComputation from "../CalculationAlgorithm";

const functions = ["+", "-", "/", "*"];

const Button = (props) => {
  const handleOnclickLogic = () => {
    props.updateScreen((prevExpression) => {
      let new_expression = prevExpression + props.button;
      let computedValue = PerformComputation(new_expression);
      props.updateFunction(computedValue);
      return new_expression;
    });
  };

  return (
    <div className="button-container" onClick={handleOnclickLogic}>
      <div className="button-content">{props.button}</div>
    </div>
  );
};

const GetFirstOperand = (expression) => {
  let operand = -1;
  for (let i = 0; i < expression.length && operand === -1; i++) {
    if (functions.includes(expression[i])) {
      operand = i;
    }
  }
  return operand;
};

// const PerformComputation = (expression) => {
//   let firstValue = "";
//   let secondValue = "";
//   let operator = "";
//   let flag = false;
//   let result = 0;
//   for (let i = 0; i < expression.length; i++) {
//     if (CanParseFloat(expression[i]) && !flag) {
//       firstValue = firstValue * 10 + parseFloat(expression[i]);
//     } else if (CanParseFloat(expression[i])) {
//       secondValue = secondValue * 10 + parseFloat(expression[i]);
//     } else if (functions.includes(expression[i])) {
//       if (operator !== "") {
//         firstValue = computeOperation(firstValue, secondValue, operator);
//         secondValue = "";
//       }
//       operator = expression[i];
//       flag = true;
//     } else if (expression[i] === "(") {
//       if (expression.includes(")")) {
//         let sub_expression = "";
//         for (
//           let j = i + 1;
//           j < expression.length || expression[j] == ")";
//           j++
//         ) {
//           if (expression[j] !== ")") {
//             sub_expression += expression[j];
//           }
//         }
//         console.log(sub_expression);
//       }
//     }
//   }

//   result =
//     secondValue === ""
//       ? firstValue
//       : computeOperation(firstValue, secondValue, operator);

//   return result;
// };

const computeOperation = (firstValue, secondValue, operator) => {
  let result = 0;
  if (operator === "+") {
    result = firstValue + secondValue;
  } else if (operator === "-") {
    result = firstValue - secondValue;
  } else if (operator === "*") {
    result = firstValue * secondValue;
  } else if (operator === "/") {
    result = firstValue / secondValue;
  }
  return result;
};

const CanParseFloat = (potentialFloat) => {
  return !isNaN(parseFloat(potentialFloat));
};

export default Button;
