import React from 'react';

function CalculatorUi() {
  // Define an array of digits to create
  const digits = ['AC', '+/-', '%', 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

  // Define an array of operators to create
  const operators = ['/', '*', '+', '-', '='];

  // Map over the digits and create a button for each one
  const digitButtons = digits.map((digit) => (
    <button key={digit} type="button">{digit}</button>
  ));

  // Map over the operators and create a button for each one
  const operatorButtons = operators.map((operator) => (
    <button key={operator} type="button">{operator}</button>
  ));

  // Return the calculator UI
  return (
    <div className="my-app">
      <div className="calculator">
        <div className="display">
          0
        </div>

        <div className="operator-digits-wrapper">
          <div className="digits">
            {digitButtons}
            <button type="button">.</button>
          </div>
          <div className="operators">
            {operatorButtons}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalculatorUi;
