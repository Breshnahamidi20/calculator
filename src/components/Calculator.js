import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clear, inputDigit, inputOperator, evaluate, inputDecimal } from '../redux/calculatorSlice';

const Calculator = () => {
  const dispatch = useDispatch();
  const display = useSelector((state) => state.calculator.display);



  const handleDigit = (digit) => dispatch(inputDigit({ digit }));

  const handleOperator = (operator) => dispatch(inputOperator({ operator }));
  const handleEvaluate = () => dispatch(evaluate());

  const handleDecimal = () => dispatch(inputDecimal());
  const handleClear = () => dispatch(clear());


  return (
    <div className="p-4 max-w-xs mx-auto">
      <div id="display" className="text-right text-2xl p-2 bg-gray-200 mb-2">
        {display}
      </div>
      <div className="grid grid-cols-4 gap-2">
        <button id="clear" onClick={handleClear} className="col-span-2 bg-red-500 text-white p-4">AC</button>
        <button id="divide" onClick={() => handleOperator('/')} className="bg-gray-400 text-white p-4">/</button>
        <button id="multiply" onClick={() => handleOperator('*')} className="bg-gray-400 text-white p-4">*</button>
        <button id="seven" onClick={() => handleDigit('7')} className="bg-gray-300 p-4">7</button>
        <button id="eight" onClick={() => handleDigit('8')} className="bg-gray-300 p-4">8</button>
        <button id="nine" onClick={() => handleDigit('9')} className="bg-gray-300 p-4">9</button>
        <button id="subtract" onClick={() => handleOperator('-')} className="bg-gray-400 text-white p-4">-</button>
        <button id="four" onClick={() => handleDigit('4')} className="bg-gray-300 p-4">4</button>
        <button id="five" onClick={() => handleDigit('5')} className="bg-gray-300 p-4">5</button>
        <button id="six" onClick={() => handleDigit('6')} className="bg-gray-300 p-4">6</button>
        <button id="add" onClick={() => handleOperator('+')} className="bg-gray-400 text-white p-4">+</button>
        <button id="one" onClick={() => handleDigit('1')} className="bg-gray-300 p-4">1</button>
        <button id="two" onClick={() => handleDigit('2')} className="bg-gray-300 p-4">2</button>
        <button id="three" onClick={() => handleDigit('3')} className="bg-gray-300 p-4">3</button>
        <button id="equals" onClick={handleEvaluate} className="row-span-2 bg-green-500 text-white p-4">=</button>
        <button id="zero" onClick={() => handleDigit('0')} className="col-span-2 bg-gray-300 p-4">0</button>
        <button id="decimal" onClick={handleDecimal} className="bg-gray-300 p-4">.</button>
      </div>
    </div>
  );
};



export default Calculator;




