import React from 'react';
import './App.css';

import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  const actions = ['÷', '×', '-', '+', '='];
  // const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3];
  const numbers1 = [7, 8, 9];
  const numbers2 = [4, 5, 6];
  const numbers3 = [1, 2, 3];

  const actionsComponents = actions.map(operators => <ActionButton operator={operators} buttonStyle='red-button' />);
  // const numbersComponents = numbers.map(numbers => <NumberButton text={numbers} buttonStyle='white-button'/>)

  const numbersComponents1 = numbers1.map(numbers => <NumberButton text={numbers} buttonStyle='white-button'/>);
  const numbersComponents2 = numbers2.map(numbers => <NumberButton text={numbers} buttonStyle='white-button'/>);
  const numbersComponents3 = numbers3.map(numbers => <NumberButton text={numbers} buttonStyle='white-button'/>);

  return (
    <div>
      <CalculatorDisplay buttonStyle="display" number="10000000"/>
      <div className="calc-body">
        <div className="input">
          <ActionButton operator="clear" buttonStyle="white-button big-button"/>
          <div >
            {numbersComponents1}
          </div>
          <div >
            {numbersComponents2}
          </div>
          <div >
            {numbersComponents3}
          </div>
          <ActionButton operator="0" buttonStyle="white-button big-button"/>
        </div>
        <div className="actions">
          {actionsComponents}
        </div>
      </div>
    </div>
  );
};

export default App;
