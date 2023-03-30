import React, { useState } from 'react';
import calculate from '../logic/calculate';

// Define the initial object
const obj = {
  total: 0,
  next: '',
  operation: '',
};

function Calculator() {
  // Set the useState hook
  const [object, setObject] = useState(obj);

  // Set the event handler
  const stateHandler = (e) => {
    setObject(calculate(object, e.target.textContent));
  };

  // Define an array of digits to create
  const digits = ['AC', '+/-', '%', 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

  // Define an array of operators to create
  const operators = ['x', '-', '+', '=', '÷'];

  // Map over the digits and create a button for each one
  const digitButtons = digits.map((digit) => (
    <button className="my-buttons" key={digit} type="button" onClick={stateHandler}>{digit}</button>
  ));

  // Map over the operators and create a button for each one
  const operatorButtons = operators.map((operator) => (
    <button className="my-buttons" key={operator} type="button" onClick={stateHandler}>{operator}</button>
  ));

  return (
    <div className="my-app">
      <div className="calculator-wrapper">
        <h2>Let&apos;s do some math!</h2>
        <div className="calculator">
          <div className="display">
            {object.total}
            {object.operation}
            {object.next}

          </div>

          <div className="operator-digits-wrapper">
            <div className="digits">
              {digitButtons}
              <button className=" comma" type="button" onClick={stateHandler}>.</button>
            </div>
            <div className="operators">
              {operatorButtons}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Calculator;
